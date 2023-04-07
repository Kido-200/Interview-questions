// * object (Object): 要检索的对象。
// * path (string): 要获取属性的路径。
// * [defaultValue] (*): 如果解析值是 undefined ，这值会被返回。
// 'a.b.c'   a[3][4][5].c.a
function get(obj, path, defaultValue) {
    const truePathArray = path.replace(/\[(\d+)\]/g, ".$1").split('.');
    console.log("truePathArray", truePathArray);
  
    const result = truePathArray.reduce((prev, key) => {
      return Object(prev)[key];
    }, obj);
  
    return result === undefined ? defaultValue : result;
  } 
  
  console.log(get({a: {b: [1]}}, 'a.b[0]'))
  // get({a: {b: [1]}}, 'a[3][4][5].c.a')