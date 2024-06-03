/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function (nums) {
  if (nums.length === 1) {
    return 0
  }
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] > nums[mid + 1]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}
// @lc code=end
