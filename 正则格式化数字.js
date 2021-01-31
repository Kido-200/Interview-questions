let reg = /[\d]{1,3}/g;

function formate(num){ 
  let res = (''+num).split('').reverse().join('')
          //'87654321'
          .match(reg)
          //[876,543,21]
          .reverse()
          //[21,543,876]
          .map(v => v.split('').reverse().join(''))
          .join(',')
  return res
}
console.log(formate(12345678));
