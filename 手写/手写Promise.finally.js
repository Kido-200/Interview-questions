//无论前面那个是resolve,还是reject都要执行callback 
//并且callback返回值对于Promise的值要没有影响

// then返回了一个resolved为2的promise
// Promise.resolve(1).then(()=>2,()=>3);
// Promise {<resolved>: 2}

// finally不改变原来resolved的状态
// Promise.resolve(1).finally(()=>2);
// Promise {<resolved>: 1}

//finally不接受任何参数,上一个Promise的resolve(val)的val不会被他接收使用，会被再次传递到下一个then
//所以无论怎样都是单纯的执行一下callback()
//为什么我们不直接 callback()呢？因为我们想要callback异步执行,即微任务,所以reslove(callback())来实现

Promise.prototype._finally = function(callback){
  let P = this.constructor
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.reslove(callback()).then(() => {throw reason})
  )
}

