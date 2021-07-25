function SuperType(name){
  this.name = name
}
SuperType.prototype.getName = function(){
  return this.name
}
function SubType(name,age){
  SuperType.call(this,name)
  this.age = age
}

//就是让SubType的prototype的__proto__指向父亲的prototype,constructor指向自己
function inheritPrototype(subType,superType){
  let prototype = Object.create(superType.prototype)
  //改一下constructor
  prototype.constructor = subType
  subType.prototype = prototype
}

inheritPrototype(SubType,SuperType);
let a1 = new SubType('kido',20)
console.log(a1.getName());
console.log(a1.name);
console.log(a1.age);
