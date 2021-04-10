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

let c = {
  i:1,
  valueOf:function(){
    console.log(this);
    return this.i++
  }
}
console.log(c==1&&c==2);

let d = {
  x:1,
  test:()=>{
    console.log(this);
  }
}
d.test()