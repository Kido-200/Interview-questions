
let node = {v:1}
node.left = {
  v:2,
  left:{
    v:3
  },
  right:{
    v:4
  }
}
node.right = {
  v:5
}


/*

        1
      2   5
    3   4

*/



//非递归思想就是一个栈维持到目前为止的node节点
//然后node = node.right  看情况console.log处理节点


/*先序 

let arr = []
while(node !==null || arr.length>0){
  if(node){
    console.log(node.v);
    arr.push(node)
    node = node.left
  }else{
    //节点为空,去等于栈里上一个节点的right
    node = arr.pop().right || null
  }
}
*/

/*中序
let arr = []
while(node!==null || arr.length > 0){
  if(node!=null){
    arr.push(node)
    node = node.left
  }
  else{
    //节点为空，输出上一个进来的节点
    let x = arr.pop()
    console.log(x);
    node = x.right || null
  }
}

*/

//后序 最难的 因为要保证左右两棵树都遍历完了
//左右中  逆转一下  就是中右左  放进数组再reverse就好了
//这种偷懒方法
let arr = []
let res = []
while(node !==null || arr.length>0){
  if(node!=null){
    res.push(node.v)
    arr.push(node)
    node = node.right
  }else{
    node = arr.pop().left || null
  }
}
console.log(res.reverse());