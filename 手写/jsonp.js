function jsonp({url,params,callback}){
  return new Promise((resolve,reject)=>{
    let script = document.createElement('script')

    // 这个写法是每次都去执行这个，外面.then拿服务端传回的数据了
    // 那感觉这个callback意义也不大，写死算了
    window[callback] = function(data){
      resolve(data)
      document.body.removeChild(script)
      delete window[callback]
    }
    params = { ...params,callback}
    let arrs = []
    for(let key in params){
      // encodeURIComponent(params[key]) 或者JSON.stringfy(params[key])会好一点
      arrs.push(`${key}=${params[key]}`)
    }
    script.src = `${url}?${arrs.join('&')}`

    document.body.appendChild(script)
  })
}

jsonp({
  url:'http://localhost:3000/say',
  params:{
    wd:'Iloveyou'
  },
  callback:'show'
})


