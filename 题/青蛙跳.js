//青蛙一次跳一格或两格子  问跳到x有几种方法

//dp 可以知道跳到i只有2种可能，一格跳过来的和两格跳过来的   差距两格,+1+1其实已经在一个跳过来里面了，所以不要重复加了
//跳到i的方法=跳到i-1的方法跳一格+跳到i-2的方法跳两个
function run(num){
  let fir = 1
  let sec = 2
  if(num === 1){
    return 1
  }
  for(let i = 3;i<=num;i++){
    let thr = fir + sec
    fir = sec
    sec = thr
  }
  return sec
}