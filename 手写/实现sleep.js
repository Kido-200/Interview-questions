//Promise
function sleep(time){
  return new Promise(resolve => setTimeout(resolve,time))
}
sleep(1000).then(()=>console.log(1))
//Generator
function* sleepGenerator(time){
  yield new Promise(resolve => setTimeout(resolve,time))
}
sleepGenerator(1000).next().value.then(()=>console.log(1))
//async
async function output(){
  await sleep(1000)
  console.log(1);
}
output()