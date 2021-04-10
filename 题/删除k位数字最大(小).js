let count = 2
let num = 3814
num = (num+'').split('').map(Number)
let index = 0
//删除count位 数字最小
while(count && index < num.length-1){
  if(num[index]>num[index+1]){
    num.splice(index,1)
    count--
    if(index-1>=0){
      index--
    }
  }
  else{
    index++
  }
}
console.log(num.join(''));