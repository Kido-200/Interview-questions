class Observer{
  constructor(data){
    //实现data和observer不会被遍历
    Object.defineProperty(this,'data',{
      value:data
    })
    // this.data = data
    let keys = Object.keys(data)

    //{a:callback[],b:callback[]}
    Object.defineProperty(this,'observer',{
      value:{},
    })

    for(let key of keys){
      Object.defineProperty(this,key,{
        enumerable:true,
        get(){
          return this.data[key]
        },
        set(newValue){
          this.$emit(key,newValue,this.data[key])
          this.data[key] = newValue
        }
      })
    }
  }

  $on(key,callback){
    if(this.data[key]){
      if(!this.observer[key]){
        this.observer[key] = [callback]
      }else{
        this.observer[key].push(callback)
      }
    }else{
      console.log('不存在这个property');
    }
  }

  $emit(key,newValue,oldValue){
    if(this.observer[key]){
      this.observer[key].forEach(callback => {
        callback(newValue,oldValue)
      })
    }
  }
}

//实现以下功能
let data = new Observer({a:1,b:2});
console.log(data.a);//1
data.$on('a',(newVal,oldVal)=>{
    console.log(`newValue:${newVal},oldValue:${oldVal}`);
});
data.$on('a',(newVal,oldVal)=>{
  console.log(`a的第二个订阅`);
});

data.a = 2;//newValue:2,oldValue1  a的第二个订阅
data.b = 4;
console.log(data.b);//4
data.$on('b',(newVal,oldVal)=>{
  console.log(`第一次:${oldVal},第二次:${newVal}`);
});
data.b = 5;//第一次:4,第二次:5

for(let i in data){ //a b
  console.log(i);
}