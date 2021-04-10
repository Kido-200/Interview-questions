//接受一个generator return出一个可以自动执行的函数, 模拟async
function asyncToGenerator(generatorFunc){

  return function(){
    //return出去的函数调用时的this要手动绑定一下,不然永远指向window了
    let gen = generatorFunc.apply(this,arguments)
    //可以知道async函数要return一个Promise,直接写就好
    return new Promise((resolve,reject)=>{
      //执行 gen.next(arg)或者gen.throw(...arg)
      function step(key,arg){
        let generatorResult
        try{
          generatorResult = gen[key](arg)
        }catch (err){
          reject(err)
        }

        const {value,done} = generatorResult
        if(done){
          resolve(value)
        }else{
          // gen.next(value) 给他传回给await左边的变量
          Promise.resolve(value).then(function(value){
            step('next',value)
          },function(error){
            step('throw',error)
          })
        }
      }
      step('next')
    })
  }
}
const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000))

function* testG() {
  // await被编译成了yield
  const data = yield getData()
  console.log('data: ', data);
  const data2 = yield getData()
  console.log('data2: ', data2);
  return 'success'
}

let func = asyncToGenerator(testG)
func().then(res => console.log(res))