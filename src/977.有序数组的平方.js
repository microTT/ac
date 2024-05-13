/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  if (!nums.length) {
    return []
  }

  const result = new Array(nums.length).fill(null)
  let index = result.length - 1

  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    if (Math.abs(nums[left]) >= Math.abs(nums[right])) {
      result[index] = Math.pow(nums[left], 2)
      left++
    } else {
      result[index] = Math.pow(nums[right], 2)
      right--
    }
    index--
  }
  return result
}
// @lc code=end
