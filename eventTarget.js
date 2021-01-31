//字节跳动 笔试1：实现一个类可以完成事件 on，once，trigger，off
//on 监听事件，当事件发送时 调用回调函数  那么当事件发送的时候forEach调用所有的就好了,然后把once的删掉
//event={type:"xx",message:"xxxx"}
class EventTarget{
  constructor(){
    this.listeners = {}
  }

  on(type,callback){
    if(!this.listeners[type]) this.listeners[type] = []
    this.listeners[type].push(callback)
  }

  once(type,callback){
    if(!this.listeners[type]) this.listeners[type] = []
    //标记一下,只执行一次
    callback._once = true
    this.listeners[type].push(callback)
  }

  off(type,callback){
    if(Array.isArray(this.listeners[type])){
      let index = this.listeners[type].indexOf(callback)
      this.listeners[type].splice(index,1)  
      if(this.listeners[type].length==0) delete this.listeners[type]
    }
  }

  trigger(event){
    const {type} = event
    if(!type) throw new Error('没有要触发的事件!')
    if(!this.listeners[type]) throw new Error(`没有对象监听${type}事件!`)
    this.listeners[type].forEach(callback => {
      callback(event)
      if(callback._once){
        this.off(type,callback)
      }
    });
  }


}
function handleMessage(event) { console.log(`message received: ${ event.message }`); }

function handleMessage2(event) { console.log(`message2 received: ${ event.message }`); }

const target = new EventTarget();

target.on('message', handleMessage);
target.on('message', handleMessage2);
target.trigger({ type: 'message', message: 'hello custom event' }); // 打印 message，message2

target.off('message', handleMessage);
target.trigger({ type: 'message', message: 'off the event' }); // 只打印 message2

target.once('words', handleMessage);
target.trigger({ type: 'words', message: 'hello2 once event' }); // 打印 words
target.trigger({ type: 'words', message: 'hello2 once event' }); // 报错：没有对象监听 words 事件！
