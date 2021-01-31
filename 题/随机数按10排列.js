// 随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，
//将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。

//10为一组排列,即每个数Math.floor(v/10)放到{}里对应的属性数组里
//并且for in 遍历{}对象
function random(min,max){
  return Math.floor(Math.random()*(max-min+1)+min)
}

// let arr = new Array(10).fill('').map(()=>random(0,99)).sort()
let arr = Array.from({length:10}).map(()=>random(0,99)).sort()

let map = {}
arr = [...new Set(arr)]
arr.forEach(v => {
  let i = Math.floor(v/10)
  if(!map[i]) map[i] = []
  map[i].push(v)
})
let res = []
for(let i in map){
  res.push(map[i])
}
console.log(res);
