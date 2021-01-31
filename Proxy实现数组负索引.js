const proxyArray = arr => {
  const len = arr.length
  return new Proxy(arr,
    {
      get(target,key){
        key = +key
        //其实用个整除法再+就好了,下面这个如果被故意输入很大负数算的有点慢
        while(key<0)
          key+=len
        return target[key]
      }
    }
    )
}


//注意a现在是一个Proxy了,没有数组的方法了
var a = proxyArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(a[1]);  // 2
console.log(a[-10]);  // 9
console.log(a[-20]);  // 8
