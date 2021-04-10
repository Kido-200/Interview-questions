function multiRequest(urls,maxNum){


  let result = []

  let isError = false

  let head = maxNum
  return new Promise((resolve,reject) => {
    for(let i = 0;i<Math.min(maxNum ,urls.length);i++){
      run(i)
    }

    function run(i){
      if(urls[i]){
        fetch(url[i]).then((data) => {
          result.push(data)
        }).catch((error) => {
          //假设错了也继续发把
          result.push(error)
          isError = true
        }).finally(() => {
          if(i===urls.length - 1){
            if(isError)
              reject(result)
            else
              resolve(result)
          }
          run(urls[head++])
        })
      }
    }

  })
}
