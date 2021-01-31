function flattenDeep(arr){
  return arr.flat(Math.pow(2,53)-1)
}

function flattenDeep2(arr){
  return arr.reduce((acc,val) => Array.isArray(val)? acc.concat(flattenDeep2(val)): 
  acc.concat(val)
  ,[])
}

function flattenDeep3(input){
  const stack = [...input]
  const res = []
  while(stack.length) {
    //使用pop从stack中取出并移除值
    const next = stack.pop()
    if(Array.isArray(next)){
      stack.push(...next)
    } else {
      res.push(next)
    }
  }
  return res.reverse()
}

function flattenDeep4(arr){
  return arr.join().split(',').map(v => Number(v))
}

console.log(flattenDeep([1,[2,3,4,[5]],[6]]));
console.log(flattenDeep2([1,[2,3,4,[5]],[6]]));
console.log(flattenDeep3([1,[2,3,4,[5]],[6]]));
console.log(flattenDeep4([1,[2,3,4,[5]],[6]]));