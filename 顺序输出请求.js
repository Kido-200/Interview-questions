//就是整个缓存数组,当得到请求数据的时,放到缓存数组[对应的发送的序号]
//遍历整个缓存数组,如果每个请求的回来了就进行操作
//反之退出
//所以只有当最后一个请求都回来的时候才会进行操作
//这样就能按发送顺序进行操作了,不然的话回来的时机不一样,无法保证每个都是按发送顺序回来的
//还能像他这样进行优化,前面几个收到了就进行输出,

function getDate(urls){
  return Promise((resolve,reject)=>{
    const res = [], len = urls.length
    urls.forEach((url,index)=>{
      fetch('http://localhost:8000'+url).then(data => data.json())
      .then(data=>{ 
        res[index] = {data,printed:false}
        for(let i = 0 ;i<len;i++){
          if(res[i]){
            if(!res[i].printed){
              res[i].printed = true
              console.log(res[i].data);
              i === len-1 && resolve(res.map(data => data.data))
            }else{
              break
            }
          }
        }
      },reject)
    })
  })
}


const listPromise = getData(['/data.json', '/data2.json', '/data3.json', '/data4.json']);
listPromise.then(res => console.log(res));

// server.js 测试：模拟各个请求延迟返回
const express = require('express');
const cors = require('cors');
const app = express();

const getTime = () => Math.floor(Math.random() * 4 * 1000);

app.use(cors({ origin: '*' }));

app.use('/data.json', (req, res) => {
  setTimeout(() => res.end(JSON.stringify({ a: 1 })), getTime());
});

app.use('/data2.json', (req, res) => {
  setTimeout(() => res.end(JSON.stringify({ b: 2 })), getTime());
});

app.use('/data3.json', (req, res) => {
  setTimeout(() => res.end(JSON.stringify({ c: 3 })), getTime());
});

app.use('/data4.json', (req, res) => {
  setTimeout(() => res.end(JSON.stringify({ d: 4 })), getTime());
});

app.listen(8080, () => console.log('the app is running at http://localhost:8080'));