//需要通过threshold参数控制调用函数频率

//意思是一个函数短时间多次调用,只执行一次
function yourFunction(func,threshold){ 
  let mark = false;
  return (...args)=>{
    //mark有值,表示最近调用了
    if(!mark){
      func(...args)
      mark = true
      //threshold时间后将mark设置为false,表示可以再次调用
      setTimeout( () => mark = false,threshold)
    }  
  }
}

let func = (a,b,c) => {console.log('调用',a,b,c);}
func = yourFunction(func,300)

func(1,2,3)
func()
func()
setTimeout(()=>func(1),400)