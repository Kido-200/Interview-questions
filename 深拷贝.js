//没有考虑对象互指的情况,即形成环这里会无限重复
//没有考虑symbol作为对象属性时遍历不出来的情况

function deepClone(source){
  if(Array.isArray(source)){
    return source.reduce((res,v)=>{
      res.push(deepClone(v))
      return res
    },[])
    //不用typeof 因为null用typeof也是Object
  }else if(source instanceof Object){
    //遍历对象两种方法
    //一种keys变成数组,用forEach或者reduce遍历(遍历完得到一个值推荐reduce)
    //第二种for i in  或者 of  这个比起forEach舒服一点
    //这里我想遍历Object得到一个{} 所以用reduce好些
    return Object.keys(source).reduce((res,key)=>{
      res[key] = deepClone(source[key])
      return res
    },{})
  }
  //不是数组也不是对象
  return source 
}

let a = Symbol()


console.log(deepClone([1, 2, [3], [4, 5, [6, 7]]]));
//这个Symbol是遍历不到的
console.log(deepClone({  [a]:'asd',b: { c: 3, d: 7, e: { y: 8, z: 4 } } ,}));
console.log(deepClone(12));
console.log(deepClone(true));
console.log(deepClone(null));
console.log(deepClone(undefined));
console.log(deepClone([1, { a: 9, b: 8 }, [3], [4, 5, [6, 7]]]));
console.log(deepClone({ a: 1, b: { c: [4, 5, [6]], d: 7, e: { y: 8, z: 4 } } }));
