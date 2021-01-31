class Observer{
  constructor(data){
    this.data = data
    let keys = Object.keys(data)
    //保存属性对应回调函数
    this.observer = {}  
    for(let key of keys){
      Object.defineProperty(this,key,{
        get(){
          return this.data[key]
        },
        set(newValue){
          this.$emit(key,this.data[key],newValue)
          this.data[key] = newValue
        }
      })
    }
  }
  
  //绑定属性对应回调函数
  $on(key,callback){
    if(!this.observer[key]){
      this.observer[key] = callback
    }
  }

  $emit(key,oldValue,newValue){
    if(this.observer[key]){
      this.observer[key](oldValue,newValue)
    }
  }
}

let data = new Observer({a:1,b:2});
console.log(data.a);//1
data.$on('a',(newVal,oldVal)=>{
    console.log(`newValue:${newVal},oldValue:${oldVal}`);
});
data.a = 2;//newValue:1,oldValue2
data.b = 4;
console.log(data.b);//4
data.$on('b',(newVal,oldVal)=>{
  console.log(`第一次:${newVal},第二次:${oldVal}`);
});
data.b = 5;//第一次:4,第二次:5
