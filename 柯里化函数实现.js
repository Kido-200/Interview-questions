const curry = (fn,...args) =>
  //fn.length就是这个函数需要参数的个数
  args.length < fn.length
  //给的参数不够函数所需,柯里化成新函数
  //长度不够，返回一个连接起新参数的去执行curry的函数
  ? (...arguments) => curry(fn,...args,...arguments)
  //给的参数已经满足函数所需,直接执行了
  :fn(...args)

// function sumFn(a,b,c){
//   return a + b + c
// }
// let sum = curry(sumFn)
// console.log(sum(2)(3)(5));
// console.log(sum(2,3)(5));
// console.log(sum(2,3,5));
// console.log(sum(2)(3,5));


function sum(...props) {
  function sumRes(...args) {
    return sum(...props, ...args);
  }

  sumRes.sumOf = function() {
    return props.reduce((prev, item) => {
      prev += item;
      return prev;  
    }, 0);
  }

  return sumRes;
}


console.log(sum(1,2,3)(4).sumOf())