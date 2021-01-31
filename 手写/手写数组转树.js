// // 例如将 input 转成output的形式
// let input = [
//   {
//       id: 1, val: '学校', parentId: null
//   }, {
//       id: 2, val: '班级1', parentId: 1
//   }, {
//       id: 3, val: '班级2', parentId: 1
//   }, {
//       id: 4, val: '学生1', parentId: 2
//   }, {
//       id: 5, val: '学生2', parentId: 3
//   }, {
//       id: 6, val: '学生3', parentId: 3
//   },
// ]

// let output = {
//   id: 1,
//   val: '学校',
//   children: [{
//       id: 2,
//       val: '班级1',
//       children: [
//           {
//               id: 4,
//               val: '学生1',
//               children: []
//           },
//           {
//               id: 5,
//               val: '学生2',
//               children: []
//           }
//       ]
//   }, {
//       id: 3,
//       val: '班级2',
//       children: [{
//           id: 6,
//           val: '学生3',
//           children: []
//       }]
//   }]
// }



//           {
//               id: 4,
//               val: '学生1',
//               children: []
//           },

//规定数组的[0]是根
function arrayToTree(array){
  let root = array[0]
  array.shift()
  let tree = {
    id: root.id,
    val: root.val,
    children: array.length > 0 ? toTree(root.id,array) : []
  }
  return tree
}

//从array中得到parentId的children的函数
function toTree(parentId,array){
  let children = []
  array.forEach(node => {
    if(node.parentId === parentId){
      children.push({
        id: node.id,
        val:node.val,
        children:toTree(node.id,array)
      })
    }
  })
  return children
}
let input = [
  {
      id: 1, val: '学校', parentId: null
  }, {
      id: 2, val: '班级1', parentId: 1
  }, {
      id: 3, val: '班级2', parentId: 1
  }, {
      id: 4, val: '学生1', parentId: 2
  }, {
      id: 5, val: '学生2', parentId: 3
  }, {
      id: 6, val: '学生3', parentId: 3
  },
]
console.log(arrayToTree(input));

