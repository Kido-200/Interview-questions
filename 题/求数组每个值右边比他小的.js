

//输入0-100的整数数组 长度10^5  输出每个元素对于整个数组比他小的个数
//[4,1,32,3,7,43,23,6] 输出 [3,0,1,2]

//两种方法, 一种类似桶排   开个100长度的数组存个数 每次O(100)  复杂度10^7
//或者直接sort 然后遍历获得每个数对应的值再遍历原数组给赋上值  O(nlogn+n+n)


//变种: 求位于每个元素右边的比他小的个数
//只有桶排了,这里做变种吧

function findMin(arr){
  //注意100要用101
  let mark = new Array(101).fill(0)
  let res = []
  for(let i = arr.length-1;i>=0;i--){
    mark[arr[i]]++
    let sum = 0;
    for(let j = 0;j<arr[i];j++){
      sum+=mark[j]
    }

    res[i] = sum
  }

  return res
}
console.log(findMin([4,1,32,3,7,43,23,6]));