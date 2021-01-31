function throttle(fn,delay){
  let previous = 0
  let result
  return function(){
    let _this = this
    let args = arguments
    let now = new Date().getTime()
    if(now - previous > delay){
      result = fn.apply(_this,args)
      previous = now;
    }
    return result
  }
}

function test(e,content){
  console.log(e,content);
}
let t = throttle(test,1000)
t(1,2)
t(3,4)
setTimeout(()=>{
  t(5,6)
},1000)
