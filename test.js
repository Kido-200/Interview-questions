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
    if(this.listeners[eventName]){
      this.listeners[eventName].forEach(event => event(data))
    }
  }

}

let e = new Event()
e.on('a',(data) => {console.log(data);})
e.emit('a','发布事件')