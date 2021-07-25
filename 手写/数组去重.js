let k = {};
let arr = [1,2,3,'3',1,2,'1',k,k];
// ES6
console.log([...new Set(arr)])

// ES5
let tmp = {}
let res = []
arr.forEach(v => {
    // 兼容数字和字符串  可惜不能去重对象
    let mark = typeof(v) + v;
    if(!tmp[mark]){
        tmp[mark] = 1;
        res.push(v);
    }
})
console.log(res);