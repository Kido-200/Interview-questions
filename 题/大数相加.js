function add(a,b){
  //把字符串转成 个位 十位..的数组 并且每个都是number类型
  const arr_a = [...a].reverse().map(v => +v)
  const arr_b = [...b].reverse().map(v => +v)
  const result = []
  let carry = 0,//进位
      i = 0,
      value_a = 0,
      value_b = 0;
  while(arr_a[i] || arr_b[i] || carry){
    let sum = 0,
        value = 0;
    value_a = arr_a[i] || 0
    value_b = arr_b[i] || 0

    sum = value_a + value_b + carry
    carry = Math.floor(sum / 10)
    value = sum % 10

    result.push(value)
    i++
  }
  return result.reverse().join('')
}
console.log(add('1234','9800'));