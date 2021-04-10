function _new(fn, ...arg) {
  //create里的会作为__proto__
  const obj = Object.create(fn.prototype);
  const ret = fn.apply(obj, arg);
  return ret instanceof Object ? ret : obj;
}


function _new(){
  //先创一个对象  原型连接
  let target = Object.create(constructor.prototype)
  let [constructor,...args] = [...arguments]

  let result = constructor.apply(target,args)
  //如果构造函数是一个对象，那么返回这个对象
  if(result && (typeof (result) == 'object'|| typeof(result)=='function')){
    return result
  }
  return target
}
function a(x,y){
  this.x = x
  this.y = y
}

function b(x,y){
  this.x = x
  this.y = y
  return {
    s:'??'
  }
}
console.log(_new(a,2,3));



