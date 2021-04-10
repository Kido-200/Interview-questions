// //记录i的父亲节点
// let fa = []

// function init(n){
//   for(let i = 0;i<n;i++)
//     fa[i] = i
// }

// //递归得到x的最上面的父亲
// // function find(x){
// //   if(fa[x] === x) 
// //     return x
// //   else
// //     return find(fa[x])
// // }
// function find(x){
//   if(fa[x] === x) 
//     return x
//   else
//   //做一层路径压缩 所有遍历到的节点的父节点都设置为根节点
//     return fa[x] = find(fa[x])
// }

// function merge(x,y){
//   let faX = find(x)
//   let faY = find(y)
//   if(faX !== faY){
//     fa[faX] = faY
//   }
// }

// 比如输入
// 040
// 406
// 060
// 输出1
// 因为第一个和第二个用户互动超过3次，互为豆油，第二个和第三也互为豆油，所以1和3互为间接豆油，三个用户都在同一个豆油瓶里，返回1.

//翻译成人话, 数字为3的两个i为一个集合,最后如果所有人都在一个集合里，输出1，否则0
// let size = []  //记录一下每个点所在集合的数量大小，虽然只有根节点才是记录的,size[find(0)]看是否=length就好了
//我这里选择直接count = length-1 每次merge成功 count--  count=0说明所有节点都在一起
function find(x){
  x === fa[x] ? x : (fa[x] = find(x))
}
function merge(x,y){
  let fX = find(x)
  let fY = find(Y)

  if(fX === fY) return

  fa[fX] = fY
  count--
}

let input = [
  [0,4,0],
  [4,0,6],
  [0,6,0]
]
let fa = []
for(let i = 0;i<input.length-1;i++)
  fa[i] = i
let count = input.length - 1
for(let i = 0;i<input.length-1;i++){
  for(let j = 0;j<input.length-1 ; j++){
    if(i === j) continue
    if(input[i][j] >= 3){
      merge(i,j)
    }
  }
}
if(count === 0){
  console.log(1);
}else{
  console.log(0)
}
