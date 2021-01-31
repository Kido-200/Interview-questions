//  func.call(x,参数)
//那么就是x作为this
//那可以写成 x.func(参数)
//这样this就是x了
//所以修改Function.prototype.call 去调用this.func()
Function.prototype.my_call = function(){
  let [newThis,...args] = [...arguments]
  if(!newThis){
    //call第一个参数如果没有传入,则默认指向 window/global 
    //global是node环境的  window是浏览器
    newThis = typeof window === 'undefined' ? global : window
  }
  //因为 func.call这样调用的  所以this=func
  newThis._func = this
  let result = newThis._func(...args)
  //因为本来没有func属性，所以要删除
  // delete newThis.func;  这样删除性能太差了 我觉得还是设置成undefined好一点
  newThis._func = undefined
  return result
}

Function.prototype.my_apply = function(){
  //args是数组
  let [newThis,args] = arguments
  if(!newThis){
    newThis = typeof window === 'undefined' ? global : window
  }
  newThis._func = this
  let result = newThis._func(...args)
  // delete newThis._func
  newThis._func = undefined
  return result
}


//兼容.bind(newThis,xxx,xxx,xx)(xxx,xxx)
Function.prototype.my_bind = function() {
  var self = this, // 保存原函数
  // 等价于 context = [].shift.call(arguments);
  context = Array.prototype.shift.call(arguments), // 保存需要绑定的this上下文
  args = Array.prototype.slice.call(arguments); // 剩余的参数转为数组
  return function() { // 返回一个新函数
    self.my_apply(context, args.concat(Array.prototype.slice.call(arguments)));
  }
}

let a = {
  x:'1'
}
function test(){
  console.log(this.x);
  console.log(...arguments);
}
test.my_call(a,'call')
test.my_apply(a,['apply'])
test.my_bind(a,'xx','xx')('bind','xx')