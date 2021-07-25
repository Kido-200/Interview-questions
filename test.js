let a = '1234567';
let index = 3;
console.log(a.substring(0, index) + '?' + a.substring(index+1));
const arr = a.split('');
// splice return去掉的东西,所以不能写在一起
arr.splice(index,1,'?');
console.log(arr.join(''));
