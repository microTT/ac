/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const count = {}
  let result = null
  nums.forEach((num) => {
    count[num] = (count[num] || 0) + 1
    if (count[num] > nums.length / 2) {
      result = num
    }
  })
  return result
}
// @lc code=end
