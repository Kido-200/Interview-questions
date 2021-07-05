function x(){
    let a  ={
        a:1,
        b:2
    }

    return function(){
        return a.a
    }
}
let a = x();
a();