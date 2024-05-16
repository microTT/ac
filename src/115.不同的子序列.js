/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = function (s, t) {
  const dp = []
  for (let index = 0; index < t.length; index++) {
    dp[0] ||= []
    dp[0][index] = 0
  }

  for (let index = 0; index < s.length; index++) {
    dp[index] ||= []
    dp[index][0] = 1
  }

  dp[0][0] = 1
  //  特别注意的一点是，这里memo的存储key是length，但是实际上遍历的是index，所以经常会有memo空间+1的情况,可以看到下面存的时候+1了

  for (let indexS = 0; indexS < s.length; indexS++) {
    const charS = s[indexS]
    dp[indexS + 1] ||= []
    for (let indexT = 0; indexT < t.length; indexT++) {
      const charT = t[indexT]
      dp[indexS + 1][indexT + 1] ||= 0
      if (charS === charT) {
        dp[indexS + 1][indexT + 1] +=
          (dp[indexS + 1 - 1][indexT + 1 - 1] || 0) +
          (dp[indexS + 1 - 1][indexT + 1] || 0)
      } else {
        dp[indexS + 1][indexT + 1] += dp[indexS + 1 - 1][indexT + 1] || 0
      }
    }
  }

  return dp[s.length][t.length] % (Math.pow(10, 9) + 7)
}
// @lc code=end
