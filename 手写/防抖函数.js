//返回的函数就是个防抖函数了
//immediate是true是执行函数后开定时器 
//false是开启定时器,定时器到时间的时候执行
function debounce(func,wait,immediate = false){
  let timeout,result
  //开启定时器,immediate =false的话定时器到时间的时候执行
  const later = (context , args) => setTimeout(()=>{
    timeout = null;//倒计时结束
    if(!immediate){
      result = func.apply(context,args)
    }
  },wait)

  let debounced = function (...params){
    //timeout = null 
    if(!timeout){
      //让timeout=计时器ID ,计时器让timeout=null
      timeout = later(this,params)
      //immediate=true 立即执行
      if(immediate){
        result = func.apply(this,params)
      }
      //没到时间
    } else {
      //重新开始计时
      //result看情况要不要清除 不清除的话会返回上次成功执行的result
      //搜索框输入查询,不可能输入太快你就把result清除成undefined呀 用户不是白输入了
      // result = undefined
      clearTimeout(timeout)
      timeout = later(this,params)
    }
    //提供在外部情空计时器的方法
    return result
  }
  debounced.cancal = function (){
    clearTimeout(timeout)
    timeout = null
  }
  return debounced
}

function t(){
  return new Date()
}
let x = debounce(t,10)
console.log(x());
console.log(x());
setTimeout(()=>{
  console.log(x());
},100)
setTimeout(()=>{
  console.log(x());
},110)

