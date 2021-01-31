function SuperType(){
  this.name = 'kido'
  this.colors = ['pink']
}

SuperType.prototype.getName = function(){
  return this.name
}
function SubType(){
  this.age = 20
}
SubType.prototype = new SuperType()
//class.prototype的constructor指向自己
SubType.prototype.construstor = SubType
SubType.prototype.getAge = function(){
  return this.age
}


let a1 = new SubType()
a1.colors.push('yellow')
console.log(a1.getName());
console.log(a1.colors);

let a2 = new SubType()
console.log(a2.colors);