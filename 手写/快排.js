function qsort(arr){
  // 每次取index===0
  // 直接遍历一遍,把小的放左数组,大的放右数组
  const index = 0;
  if(arr.length <= 1){
    return arr;
  }
  const leftArr = [];
  const rightArr = [];
  for(let i = 1;i < arr.length ; i++){
    if(arr[i]<=arr[index]){
      leftArr.push(arr[i]);
    }else{
      rightArr.push(arr[i]);
    }
  }

  return [...qsort(leftArr),arr[0],...qsort(rightArr)];
}

function qsort(arr){
  // 每次取index===0
  // 直接遍历一遍,把小的放左数组,大的放右数组
  const index = 0;
  if(arr.length <= 1){
    return arr;
  }
  const leftArr = [];
  const rightArr = [];
  for(let i = 1;i < arr.length ; i++){
    if(arr[i]<=arr[index]){
      leftArr.push(arr[i]);
    }else{
      rightArr.push(arr[i]);
    }
  }

  return [...qsort(leftArr),arr[0],...qsort(rightArr)];
}
console.log(qsort([1,7,213,3,6]))
// 下面是同一个数组里操作,思路是两边找到一对不符合的了,进行调换
// 最后停留的位置和
/**
 * 
function qsort(arr,l,r){
  const base = arr[l];

  if(l >= r){
    return arr;
  }
  
  let i = l + 1;
  let j = r;

  let index = l;

  while(i<=j){
    while(i <= j && arr[j]>=base){
      j--;
    }
    if(i <= j){
      arr[index] = arr[j];
      index = j;
    }
    while(i <= j && arr[i]<base){
      i++;
    }

    if(i <= j){
      arr[index] = arr[i];
      index = i;
    }

  }

  arr[index] = base;

  qsort(arr,l,index-1);
  qsort(arr,index+1,r);
  return arr;
}

console.log(qsort([7,2,1,233,4],0,4))
 */
