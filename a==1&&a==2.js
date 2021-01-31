let a = {
  //对象自带的，当转化为原始类型时的属性
  [Symbol.toPrimitive]:(function(){
    let i = 1
    return function(hint){
      console.log(hint);
      return i++
    }
  })()
}
console.log(a==1&&a==2);

let b = {
  valueOf:(function(){
    let i = 1;
    return function(){
      return i++
    }
  })()
}
console.log(b==1&&b==2);