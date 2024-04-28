/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  let leftStep = 0

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]
    leftStep = Math.max(current, leftStep - 1)

    if (leftStep === 0 && i !== nums.length - 1) {
      return false
    }
  }
  return true
}
// @lc code=end
