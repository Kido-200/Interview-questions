// keys本来就是string
console.log(Object.keys(Array(1000).fill('')).filter(x =>{
  return x.length > 1 && x === x.split('').reverse().join('')
}));