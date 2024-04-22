/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const result = []

  function traverse(tracker, choices) {
    if (!choices.length) {
      result.push(tracker)
      return
    }
    for (let i = 0; i < choices.length; i++) {
      traverse(
        [...tracker, choices[i]],
        choices.filter((_, index) => i !== index)
      )
    }
  }

  traverse([], nums)
  return result
}
// @lc code=end
