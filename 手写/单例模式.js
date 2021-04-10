let Component = (function (){

  let instance
  function Single(title){
    this.title = title
  }

  return function(){
    if(instance){
      return instance
    }
    return instance = new Single(...arguments)
  }
})()

let a = new Component('a')
let b = new Component('b')
console.log(a === b);
