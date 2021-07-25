function deepClone(obj, hash = new WeakMap()) {
  if (hash.has(obj)) return hash.get(obj);
  var cobj;
  // null
  if (obj === null) { return obj }
  let t = typeof obj;

  // 基本类型
  switch (t) {
      case 'string':
      case 'number':
      case 'boolean':
      case 'undefined':
          return obj;
  }

  // 数组
  if (Array.isArray(obj)) {
      cobj = [];
      obj.forEach((c, i) => { cobj.push(deepClone(obj[i])) });
  } else {
      cobj = {};
      // object 
      if (Object.prototype.toString.call(obj) === "[object Object]") {
          Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj)).forEach(c => {
              hash.set(obj, cobj);
              cobj[c] = deepClone(obj[c], hash);
          });
      } else {
          //function date
          //内置Object
          cobj = obj;
      }
  }
  return cobj;
}

function deepclone(obj,hash = new WeakMap){
  if(hash.has(obj)) return hash.get(obj)
  if(obj instanceof Object){
    let nObj = {}
    if(Array.isArray(obj))
      nObj = []
    hash.set(obj,nObj)
    Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj)).forEach(key => {
      nObj[key] = deepclone(obj[key],hash)
    })
    return nObj
  }

  return obj
}

let a = Symbol()

let b = 'xxx'

console.log(deepclone([1, 2, [3], [4, 5, [6, 7]]]));
console.log(deepclone({  [a]:'asd',[b]: { c: 3, d: 7, e: { y: 8, z: 4 } } ,}));
console.log(deepclone(12));
console.log(deepclone(true));
console.log(deepclone(null));
console.log(deepclone(undefined));
console.log(deepclone([1, { a: 9, b: 8 }, [3], [4, 5, [6, 7]]]));
console.log(deepclone({ a: 1, b: { c: [4, 5, [6]], d: 7, e: { y: 8, z: 4 } } }));
console.log(deepclone({ a:function(a){}}))
