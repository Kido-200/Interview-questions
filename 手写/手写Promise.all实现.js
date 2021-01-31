//promises是个数组
Promise.my_all = function(promises){
  return new Promise((resolve,reject)=>{
    //Array.from 将类数组转换成数组
    promises = Array.from(promises)
    if(promises.length === 0){
      resolve([])
    }else {
      let result = []
      let index = 0
      for(let i = 0; i < promises.length;i++){
        Promise.resolve(promises[i]).then(data => {
          result[i] = data
          if(++index === promises.length){
            resolve(result)
          }
        },err => {
          reject(err)
          return
        })
      }
    }
  })
}
let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
let p3 = Promise.resolve(3)
Promise.my_all([p1,p2,p3]).then(data=>console.log(data))