/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = function (n) {
  if (n === 2) {
    return 1
  }

  const dp = [1, 1]
  for (let index = 2; index <= n; index++) {
    for (let divide = 1; divide < index; divide++) {
      dp[index] = Math.max(
        dp[index] || 0,
        divide * Math.max(dp[index - divide], index - divide)
      )
    }
  }

  return dp[n]
}
// @lc code=end
