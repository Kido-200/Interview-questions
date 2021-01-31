let num = 1234567
console.log(num.toLocaleString('en-US'));
num = 12345.6789
console.log(num.toLocaleString('en-US'));

function format(num) {
  if(typeof num !== 'number') return num
  //得到整数和小数部分
  //'1234'  '45
  const [first,last] = ('' + num).split('.')
  const len = first.length
  //[4,3,2,1]
  const tmp = first.split('').reverse().reduce((res,v,i)=>{
    if((i+1)%3==0 && i+1 !=len){
      res.push(v,',')
    }else {
      res.push(v)
    }
    return res
    //[4,3,2,',',1]
    //[1,',',2,3,4]
  },[]).reverse().join('')
  return last ? tmp + '.' + last : tmp
}
console.log(format(77474747474));
