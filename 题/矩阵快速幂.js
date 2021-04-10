//求x的n次方
// function pow(x,n){
//   let sum = 1
//   while(n){
//     if(n && 1)
//       sum*=x

//     n>>=1
//     x = x*x
//   }
//   return sum
// }

//矩阵为n*n  
function multi(a,b,n){
  let tmp =[]
  for(let i =0;i<n;i++)
    tmp[i] = new Array(n).fill(0)
  
  for(let i =0;i<n;i++){
    for(let j = 0;j<n;j++){
      //i行 j列 拿a的i行*b的j列求和
      for(let k = 0;k<n;k++){
        tmp[i][j] += a[i][k]*b[k][j]
        //    tmp[i][j] += a[i][k]*b[k][j] % mod
      }
      // tmp[i][j] = tmp[i][j] % mod   如果数字太大要%mod 要在这两个地方加
    }
  }
  return tmp
}

//m是次方  n*n矩阵
function pow(a,m,n){
  //单位矩阵 对角线全是1，其他是0
  let res = new Array(n)
  for(let i = 0;i<n;i++)
    {
      res[i] = new Array(n).fill(0)
      res[i][i] = 1
    }
  while(m){
    if(m&1)
    {
      res = multi(res,a,n)
      console.log(res);
    }
    a = multi(a,a,n)
    m>>=1
  }
  return res
}

//初始化俩矩阵
let a = []
a[0] = [];a[1]=[];
a[0][0] = 1;a[0][1] = 1;a[1][0] = 1;a[1][1] = 0;
let tmp = []
tmp[0] = [];tmp[1]=[]
tmp[0][0] = 1; tmp[1][0] = 1

//求个n=5试试
let n =10


a = pow(a,n-2,2) 
let res = a[0][0]*tmp[0][0] + a[0][1] * tmp[1][0]
console.log(res);




//测试答案是否正确
let prev = 1
let end = 1
for(let i = 3;i<=n;i++){
  let f = prev +end
  prev = end
  end = f
}
console.log(end);
