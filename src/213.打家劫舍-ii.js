/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  if (nums.length <= 1) {
    return nums[0]
  }
  function dp(index, end, memo) {
    if (index > end) {
      return 0
    }
    if (typeof memo[index] === 'number') {
      return memo[index]
    }

    memo[index] = Math.max(
      nums[index] + dp(index + 2, end, memo),
      dp(index + 1, end, memo)
    )
    return memo[index]
  }

  return Math.max(dp(0, nums.length - 2, []), dp(1, nums.length - 1, []))
}
// @lc code=end
