function add(num){
  var sum=0;    
  sum= sum+num;    
  return function tempFun(numB){
      if(arguments.length===0){           
           return sum;
      }else{           
           sum= sum+ numB;          
            return tempFun;
      }

  }
}

var result=add(2)(3)(4)(5)();
console.log(result);//输出14