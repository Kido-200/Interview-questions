const o = {
  a: 1,
  b: 2,
  c:{
    d: 3,
    e: {
      f: 4
    }
  }
}


Object.prototype.deepFreeze = function(o){
  var _keys = Object.getOwnPropertyNames(o)
  _keys.forEach(key => {
    var _value = o[key]
    if(typeof _value === 'object' && _value !== null){
      deepFreeze(o[key])
    } 
  })
  return Object.freeze(o)
}

Object.deepFreeze(o)
o.c.d=5
console.log(o.c.d);