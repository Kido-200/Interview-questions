function test(arr,tar){
  let obj = {}
  //forEach无法中断,所以要用for
  // arr.forEach((v,index) => {
  //   if(obj[tar-v]!=undefined){
  //     return [obj[tar-v],index]
  //   }else{
  //     obj[v] = index
  //   }
  // })
  for(let index = 0;index<arr.length;index++){
    let v = arr[index]
        if(obj[tar-v]!=undefined){
      return [obj[tar-v],index]
    }else{
      obj[v] = index
    }
  }
  return false
}
console.log(test( [2, 7, 11, 15],9));
