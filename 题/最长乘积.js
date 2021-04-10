var maxProduct = function(nums) {
  //注意是整数数组没小数
  //而且因为存在负数，所以得到的答案有两种途径
  //1.最大值*当前数获得
  //2.最小值*当前数获得  因为当前数是个负数
  //所以只要维护两个dp,取两者最大值就好了
  //dpMax=Max(dpMax*i || dpMin*i || nums[i])
  //dpMin=Min(dpMax*i || dpMin*i || nums[i])
  //dpMin含义为包含当前i的最大串乘积 所以当遇到0的时候会变成0 下一个i+1就要单独nums[i]来处理了
  let dpMax = 1
  let dpMin = 1
  //防止一个数的情况
  let max = nums[0]
  for(let i = 0;i<nums.length;i++){
      //防止对dpMax的篡改导致dpMin使用的值发生了改变
      //nums[i]来处理nums[i]===0的情况
      let x = Math.max(dpMax*nums[i],dpMin*nums[i],nums[i])
      let y =  Math.min(dpMax*nums[i],dpMin*nums[i],nums[i])
      dpMax = x
      dpMin = y
      max = Math.max(dpMax,dpMin,max)
  }
  return max
};
console.log(maxProduct([-4,-3,-2]));
