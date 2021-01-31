function test(s){
    //记录滑动窗口中的各个字符下标
   let map = new Map()
   let len = s.length;
   //不重复字符串的头部
   let h = -1
   let res = 0

   for(let j = 0;j<len;j++){
       //那要把原来那个以及之前的元素全部弹出
       if(map.has(s[j])){
        h = map.get(s[j])
       }
       res = Math.max(res,j - h)
       map.set(s[j],j)
   }
   return res
}
console.log(test('abccfghj'));
