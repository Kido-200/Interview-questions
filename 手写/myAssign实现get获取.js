const source = {
  a: 1,
  get b(){
    return 2
  },
}



let a = Object.assign({},source)
//可以发现a.b = 2是直接被赋值的,而不是a.b = get()
console.log(a);
//我们可以自己实现 那就一定要调用Object.getOwnPropertyDescriptor(obj,key)来获得包括get的所有属性
//要用descriptor给对象添加属性，就又要用到Object.defineProperies(obj,descriptos)
//注意没有包括Symbol

/*
获得以下descriptors
{
  a:{
    value: 1, writable: true, enumerable: true, configurable: true
  },
  b:{
    get: [Function: get b],
    set: undefined,
    enumerable: true,
    configurable: true
  }
}

*/
Object.myAssign = (target,...sources) => {
  let descriptors = sources.reduce((descriptors,source) => {
    Object.keys(source).forEach(key => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source,key)
    })
    // descriptors = {...descriptors,...Object.getOwnPropertyDescriptors(source)}
    return descriptors
  },{})
  Object.defineProperties(target,descriptors)
  return target
}
let b = Object.myAssign({},source)
console.log(b);