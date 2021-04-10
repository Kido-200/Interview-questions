function _Promise(cb){
  this.status = 'pending'
  this.value = ''
  this.reason = ''

  //缓存方法
  this.resolveCache = []
  this.rejectCache = []

  let self = this

  cb(resolve,reject)

  //resolve要执行 then延迟绑定的函数
  function resolve(value){
    //应该用微任务的,这里模拟一下
    setTimeout(run)
    function run(){
      if(self.status === 'pending'){
        //链式调用时,下一个then可获得上一个then的返回值
        self.value = value
        self.status = 'fulfilled'
        while(self.resolveCache.length){
          //这个fn是我们改造后的延迟绑定的then里面的resolve了
          //这个fn在运行原本then的resolve的基础上
          //还会使then返回的Promise执行他的resolve
          const fn = self.resolveCache.shift()
          fn(self.value)
        }
      }
    }
  }

  function reject(reason){
    setTimeout(run)
    function run(){
      if(self.status === 'pending'){
        //链式调用时,下一个then可获得上一个then的返回值
        self.reason = reason
        self.status = 'rejected'
        //没有then的话就是空的了，不会执行
        while(self.rejectCache.length){
          const fn = self.rejectCache.shift()
          fn(self.reason)
        }
      }
    }
  }
}

//这两个函数是上个Promise需要的resolve和reject
//当前Promise用then传给下个Promise的value是来自于当前Promise的
//第一个是来自于resolve(x),而then里的则来自于resolve(onFulfilled函数的返回值)
//而onFulfilled(value) 的执行需要上一个Promise的value
//所以这个Promise的resolve需要在上一个Promise中调用
//所以我们把onFulfilled push到上个Promise里去，让他微任务的时候执行
//使得当前Promise变成fulfilled,并且拥有value能传给下一个Promise
_Promise.prototype.then = function(onFulfilled , onRejected){
  //这个self时调用then的那个Promise
  let self = this
  //如果promise/then 传入的参数不是函数，将会透传
  if(typeof onFulfilled !== 'function'){
    onFulfilled = function(value){
      return value
    }
  }
  if(typeof onRejected !== 'function'){
    onRejected = function(reason){
      return reason
    }
  }
  //then要返回一个Promise
  //这个resolve和reject是该Promise的resolve和reject
  return new _Promise(function (resolve,reject){
    //改造then传进来的需要延迟绑定的resolve和reject函数
    //因为要连续then,就需要上个then的返回值
    //所以改造一下，来得到返回值
    let resolveFn = function (value){
      try{
        //上个Promise的resolve的返回值即x
        const x = onFulfilled(value)
        // 这个Promise resolve的值取决于上个Promise的resolve的返回值即x
        //执行一下返回的这个Promise,他内部会执行resolve或reject来表示成功或失败
        //刚好我们就可以绑定上自己resolve,reject来使得目前这个then的状态也被确定
        //要时刻注意then返回的这个Promise的状态不要忘记更新 
        //更新状态的方法只有调用他自身的resolve或reject
        x instanceof _Promise ? x.then(resolve,reject) : resolve(x)
      }catch(e){
        reject(e)
      }
    }

    let rejectFn = function (reason){
      try{
        const x = onRejected(reason)
        x instanceof _Promise ? x.then(resolve,reject) : reject(x)
      }catch(e){
        reject(e)
      }
    }
    //根据上一个Promise的状态进行操作
    switch(self.status){
      //上一个状态还是pending,就需要给他resolve和reject函数
      //对应这个then里的函数
      case 'pending':
        self.resolveCache.push(resolveFn)
        self.rejectCache.push(rejectFn)
        break;
      case 'fulfilled':
        resolveFn(self.value);
        break;
      case 'rejected':
        rejectFn(self.reason)
        break
    }
  })
}

new _Promise((resolve,reject)=>{
  console.log(1);
  resolve(2)
}).then(value=>{
  console.log(value);
  return 3
})