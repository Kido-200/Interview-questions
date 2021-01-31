function uniq(arr){
  return [...new Set(arr)]
}

function uniq2(arr){
  let result = []
  for(let i = 0;i<arr.length;i++){
    if(result.indexOf(arr[i]) === -1){
      result.push(arr[i])
    }
  }
  return result
}

function uniq3(arr){
  let result = []
  for(let i = 0;i<arr.length;i++){
    if(!result.includes(arr[i])){
      result.push(arr[i])
    }
  }
  return result
}

function uniq4(arr){
  return arr.reduce( (prev,val) => prev.includes(val) ? prev : [...prev,val]
  ,[])
}

function uniq5(arr){
  let map = new Map()
  let result = new Array()
  for(let i = 0;i < arr.length ; i++){
    if(!map.has(arr[i])){
      map.set(arr[i],true)
      result.push(arr[i])    
    }
  }
  return result
}


console.log(uniq([1, 2, 3, 5, 3, 2]));
console.log(uniq2([1, 2, 3, 5, 3, 2]));
console.log(uniq3([1, 2, 3, 5, 3, 2]));
console.log(uniq4([1, 2, 3, 5, 3, 2]));
console.log(uniq5([1, 2, 3, 5, 3, 2]));
