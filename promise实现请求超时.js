//抓住 promise 的状态只能由 pending -> fulfilled，
//或者 pending -> rejected，并且只能进行一次改变
//意思是resolve和reject总共只会被调用一次

function promiseWithTimeout(url,timeout=3000){
  return new Promise((resolve,reject)=>{
    fetch('http://localhost:8000'+url).then(data => data.json())
      .then(()=>{
        //不clear应该也行,因为已经执行resolve了,reject不会被运行
        clearTimeout(mark)
        resolve(data)
      })
    //超时了就会reject掉
    let mark = setTimeout(()=>{
      reject(Error('time is out'))
    },timeout)
  })
}