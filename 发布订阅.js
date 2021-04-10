function Sub(name){
  this.name = name
  this.subscribe = (pub)=>{
    pub.add(this)
  }
  this.delete = (pub) => {
    pub.delete(this)
  }
  this.notify = (value) => {
    console.log(this.name,'get value',value);
  }
}
function Pub(name){
  this.name = name
  this.subscribes=[]
  this.publish = (value) => {
    this.subscribes.forEach(sub => {
      sub.notify(value)
    })
  }
  this.add = (sub) => {
    this.subscribes.push(sub)
  }
  this.delete = (sub) => {
    this.subscribes = this.subscribes.filter(item => !(item === sub))
  }
  
}
let peopleNewspaper = new Pub()
//实例化两个订阅者
let zhangsan = new Sub('张三')
let lisi = new Sub('李四')
//订阅操作
zhangsan.subscribe(peopleNewspaper) //张三订阅了你
lisi.subscribe(peopleNewspaper) //李四订阅了你
//发布者发布新消息
peopleNewspaper.publish('人民日报') //您好,张三!您有新的报纸--人民日报 您好,李四!您有新的报纸--人民日报
zhangsan.delete(peopleNewspaper)
peopleNewspaper.publish('人民日报') //李四!您有新的报纸--人民日报

function Shop(){
  //信息通道
  this.list = {}

  this.sub = (key,fn)=>{
    if(!this.list[key]){
      this.list[key] = []
    }
    this.list[key].push(fn)
  }

  this.pub = (key,...args)=>{
    //为空
    if(!this.list[key]) return

    this.list[key].forEach(fn => {
      fn.apply(this,args)
    })
  }
}
let shop = new Shop()
shop.sub('iphone',function(value){
  console.log('iphone价格',value);
})
shop.pub('iphone',100)
