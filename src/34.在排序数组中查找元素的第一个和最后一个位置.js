/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  const result = []

  let left = 0
  let right = nums.length - 1

  let includes = false

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] === target) {
      includes = true
      right = mid - 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  if (!includes) {
    return [-1, -1]
  }

  result.push(left)
  left = 0
  right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] === target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  result.push(right)
  return result
}
// @lc code=end
