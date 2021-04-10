function qsort(arr,left,right){
  let mid = Math.floor((left + right) /2)
  if(right === left){
    return [arr[left]]
  }
  let Left = qsort(arr,left,mid)
  let Right = qsort(arr,mid+1,right)
  let result = []
  while(Left.length && Right.length){
    if(Left[0] < Right[0])
      result.push(Left.shift())
    else
      result.push(Right.shift())
  }

  while(Left.length){
    result.push(Left.shift())
  }
  while(Right.length){
    result.push(Right.shift())
  }
  return result
}

let a = [4,54,2,1,553]
console.log(qsort(a,0,a.length - 1));
