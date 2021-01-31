//没找到返回defaultValue
function get(source,path , defaultValue = undefined){
  // a[2].b---- a.2.b --- [a,2,b]
  //[2] ---- .2
  let paths;
  if(!Array.isArray(path)){
    paths = path.replace(/\[(\d+)\]/g,".$1").split('.')
  }else{
    paths = path
  }
  let res = source;
  for(let i of paths){
    //null和undefined 取属性会报错,所以要转成Object
    res = Object(res)[i]
    if(res == undefined){
      return defaultValue
    }
  }
  return res
}

console.log(get({ a: null }, "a.b.c", 3)); // output: 3
console.log(get({ a: undefined }, "a", 3)); // output: 3
console.log(get({ a: null }, "a", 3)); // output: 3
console.log(get({ a: [{ b: 1 }] }, "a[0].b", 3)); // output: 1
console.log(get({ a: [{ b: 1 }] }, ['a','0','b'], 3)); // output: 1
