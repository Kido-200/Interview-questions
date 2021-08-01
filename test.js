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