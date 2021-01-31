//类似手写Promise
//对于eat这种函数 加到数组中去保存，从而实现延迟绑定
//因为sleepFirst需要领先其他的执行，所以必须用数组保存其余的
//调用setTimeout宏任务调用start来执行数组里的各个函数
class LazyManClass{
  constructor(props){
    this.sub = []
    console.log(`Hi I am ${props}`);
    setTimeout(()=>{
      this.start()
    })
  }

  eat(params){
    this.sub.push(()=>{
      console.log(`I am eating ${params}`);
    })
    return this
  }

  //返回一个函数，执行就能睡
  delay(s){
    return () => {
      return new Promise(resolve => {
        setTimeout(function(){
          console.log(`等待了${s}秒`);
          resolve()
        },s*1000)
      })
    }
  }

  sleepFirst(s){
    this.sub.unshift(this.delay(s))
    return this
  }

  sleep(s){
    this.sub.push(this.delay(s))
    return this
  }

  async start(){
    for(let func of this.sub){
      //因为sleep这种异步函数要等待，所以要await
      await func()
    }
  }
}

function LazyMan(props){
  return new LazyManClass(props)
}

LazyMan('Tony').eat('lunch').eat('diner').sleepFirst(1).sleep(2).eat('junk food')
