let a = 1234567
console.log(a.toLocaleString());

//可以发现一个特征,每个千分位距离.都有3的倍数个数字在后面,所以可以写成下面这样,但是注意这基于有个.
//所以必须把数字转成小数字符串来操作
let reg = /(\d)(?=\d{3})+\./g
console.log(a.toFixed(2).replace(reg,'$1,'));

let reg2 = /(\d)(?=\d{3})+#/g
console.log((a+'#').replace(reg2,'$1,').slice(0,-1));