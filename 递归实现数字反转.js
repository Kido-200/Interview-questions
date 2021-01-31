// 用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。
// 要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。

function reverse(num){
  let last = num % 10;
  num = num/10;
  //说明这是最后一位了
  if(num<1){
    return last.toString()
  }
  num = Math.floor(num)
  return last.toString()+reverse(num)
}

console.log(reverse(1234));