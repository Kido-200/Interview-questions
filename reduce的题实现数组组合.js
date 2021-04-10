// 实现[['a', 'b'], ['n', 'm'], ['0', '1']] => ["an0", "an1", "am0", "am1", "bn0", "bn1", "bm0", "bm1"]

function run(arr){
  //先把数组变成 ['a','b']  再把 数组变成 ['an','am','bn','bm'] 最后["an0", "an1", "am0", "am1", "bn0", "bn1", "bm0", "bm1"]
  //可以发现 每次都给老数组里的每一个元素拼上新数组就好了
  //主要是用到了reduce当initialValue不填的时候prev=arr[0] 并且callback从arr[1]开始运行
  return arr.reduce((prev,subArr) => {
    //第一次执行函数是从arr[1]
    let list = []

    for(let i = 0;i<prev.length;i++){
      for(let j = 0;j<subArr.length;j++){
        list.push(prev[i]+subArr[j])
      }
    }

    return list
  })
}
console.log(run([['a', 'b'], ['n', 'm'], ['0', '1']]));
