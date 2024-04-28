/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
  const dp = [0]
  for (let index = 0; index < nums.length; index++) {
    const currentStep = nums[index]
    for (let step = 1; step <= currentStep; step++) {
      dp[index + step] = Math.min(dp[index + step] || Infinity, dp[index] + 1)
    }
  }
  return dp[nums.length - 1]
}
// @lc code=end
