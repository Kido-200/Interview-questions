
// // 转换后的结果如下
// let result = [
//   {
//     id: 1,
//     name: '部门A',
//     parentId: 0,
//     children: [
//       {
//         id: 3,
//         name: '部门C',
//         parentId: 1,
//         children: [
//           {
//             id: 6,
//             name: '部门F',
//             parentId: 3
//           }, {
//             id: 16,
//             name: '部门L',
//             parentId: 3
//           }
//         ]
//       },
//       {
//         id: 4,
//         name: '部门D',
//         parentId: 1,
//         children: [
//           {
//             id: 8,
//             name: '部门H',
//             parentId: 4
//           }
//         ]
//       }
//     ]
//   },
// ···
// ];

function convert(list){
  //parentId=0的直接放进res数组
  let res = []

  //children怎么实现呢,因为对象是指针保存的,所以只要直接修改他的children就好了
  //防止id是乱的,我们用一个对象存一下指针
  let tmp = list.reduce((obj,item) => {
    obj[item.id] = item
    return obj
  },{})
  list.forEach(item => {
    if(item.parentId===0){
      res.push(tmp[item.id])
    }else{
      tmp[item.parentId].children = tmp[item.parentId].children || []
      tmp[item.parentId].children.push(item)
    }
  })
  return res
}

let arr =[
  {id:1,name:'部门A',parentId:0},
  {id:2,name:'部门B',parentId:0},
  {id:3,name:'部门C',parentId:1},
  {id:4,name:'部门D',parentId:1},
  {id:5,name:'部门E',parentId:2},
  {id:6,name:'部门F',parentId:3},
  {id:7,name:'部门G',parentId:2},
  {id:8,name:'部门H',parentId:4}
];
const result = convert(arr);
console.log(result);