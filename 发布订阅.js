class Event{
  constructor(){
    // {a:callback[],b:}
    this.listeners = {}
  }

  on(eventName,callback){
    if(!this.listeners[eventName])
      this.listeners[eventName] = []
    this.listeners[eventName].push(callback)
  }

  emit(eventName,data){
    const callbacks = this.listeners[eventName]
    if(callbacks){
      callbacks.forEach(event => event(data))
    }
  }

}

//emit根本不关心有没有这个人订阅了,发就完事儿了
let e = new Event()
e.on('a',(data) => {console.log(data);})
e.emit('a','发布事件')