function MessageCenter(){
  //存放消息
  let message = {} 
  
  //消息注册
  this.register = function(messageType){
    if(typeof message[messageType]=='undefined'){
      message[messageType] = []
    }else{
      console.log('消息已被注册');
    }
  }

  //消息订阅 ,给消息数组里添加上该回调函数
  this.subscribe = function(messageType,fn){
    if(typeof message[messageType] != 'undefined'){
      message[messageType].push(fn)
    }else{
      console.log('没有这种消息,无法订阅');
    }
  }

  //消息发布, args是要操作的数据
  this.emit = function(messageType,args){
    let events = {
      type:messageType,
      args: args || {}
    }
    if(typeof message[messageType] != 'undefined'){
      message[messageType].forEach(fn => {
        fn(events)
      })
    }else{
      console.log('没有这种消息,无法发布');
    }
  }
}

let center = new MessageCenter()
center.register('a')
center.subscribe('a',(data)=>console.log(data))
center.emit('a',['data1','data2'])
