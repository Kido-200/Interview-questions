// 发布新闻时需要提醒发布的时间。
// 写一个函数，传递一个参数为时间戳，完成时间的格式化。
// 如果发布一分钟内，输出：刚刚；
// n 分钟前发布，输出：n分钟前；
// 超过一个小时，输出：n小时前；
// 超过一天，输出：n天前；
// 但超过一个星期，输出发布的准确时间



function format(date,testMode){
  const MIN = 60 * 1000
  const HOUR = MIN * 60
  const DAY = HOUR * 24
  const WEEK = DAY * 7
  const time = testMode ? date : Date.now() - date
  if(time < MIN){
    return '刚刚'
  }
  else if(time<HOUR){
    return Math.floor(time/MIN) + '分钟前'
  }
  else if(time < DAY){
    return Math.floor(time/HOUR) + '小时前'
  }
  else if(time < WEEK){
    return Math.floor(time/DAY) + '天前'
  }
  else{
    return new Date(testMode ? Date.now() - date : date).toLocaleString()
  }
}

// 测试
console.log(format(60 * 1000 - 1, true)); // 59 秒 999
console.log(format(60 * 1000, true)); // 1 分

console.log(format(60 * 1000 * 59 + 59 * 1000 + 999, true)); // 59 分 59 秒 999
console.log(format(60 * 1000 * 60, true)); // 1 小时

console.log(format(60 * 1000 * 60 * 23 + 60 * 1000 * 59 + 59 * 1000 + 999, true)); // 23 小时 59 分 59 秒 999
console.log(format(60 * 1000 * 60 * 24, true)); // 1 天

console.log(format(60 * 1000 * 60 * 24 * 6, true)); // 6 天
console.log(format(60 * 1000 * 60 * 24 * 7, true)); // 7 天

// 正常使用
console.log(format(1554111847534)); // 发布时的时间戳
