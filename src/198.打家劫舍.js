/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const dp = []

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]
    dp[i] = Math.max(current + (dp[i - 2] || 0), dp[i - 1] || 0)
  }

  return dp[nums.length - 1]
}
// @lc code=end
