//a和b唯一的区别
//对原本的a进行赋值等 不会触发Proxy的get set函数
//对Proxy返回的对象进行赋值 get set才会触发
let a ={x:1}
let b = new Proxy(a,{
  //obj是a    receiver是b
  get(obj,key,receiver){
    return obj[key] + 2
    // return receiver[key] 会无限递归
  }
})
console.log(a.x);
console.log(b.x);
//应该就是Object.defineProperty(b)  
//get:return a[key] set:a[key]=val  这样实现的,还有就是设置新属性会立刻defineProperty