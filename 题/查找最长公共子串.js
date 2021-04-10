//二维dp查找最长公共子串
//dp[i][j] = dp[i-1][j-1] + 1
//https://discuss.acmcoder.com/topic/5d47dfa8b99ad44605a1700b

function run(str1,str2){
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  let dp = []
  let max = 0
  for(let i = 0;i<str1.length+1;i++)
    dp[i] = new Array(str2.length+1).fill(0)
  for(let i = 1;i<str1.length+1;i++){
    for(let j = 1;j<str2.length+1;j++){
      if(str1[i]===str2[j])
        {
          dp[i][j] = dp[i-1][j-1] + 1
          max = Math.max(max,dp[i][j])
        }
      else{
          dp[i][j] = 0
      }
    }
  }
  return max
}
console.log(run('acbcbcef','abcbced'));
