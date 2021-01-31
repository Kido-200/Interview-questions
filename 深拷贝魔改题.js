//实现以下效果
// destructuringArray( [1,[2,4],3], "[a,[b],c]" );
// result
// { a:1, b:2, c:3 }

function destructuringArray(values,keys){
  const obj = {}
  if(typeof keys === 'string'){
    keys = JSON.parse(keys.replace(/\w+/g,'"$&"'))
  }
  //变成了 ['a',['b'],'c']
  //好了,接下来跟深拷贝很像了,遍历递归就好了
  //values是对应数组 keys是对应属性数组
  const iterate = (values,keys)=>{
    keys.forEach((key,index) => {
      if(Array.isArray(key)){
        //把对应的数组和 属性数组传进去
        iterate(values[index],key)
      }else{
        obj[key] = values[index]
      }
    })
  }
  iterate(values,keys)
  return obj
}

const targetArray = [1, [2, 3], 4];
const formater = "[a, [b], c]";
const formaterArray = ['a', ['b'], 'c'];
console.dir(destructuringArray(targetArray,formater));
console.dir(destructuringArray(targetArray,formaterArray));
