/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
  const result = []

  const sortedNums = nums.sort((v1, v2) => v1 - v2)

  function traverse(tracker, choices) {
    if (!choices.length) {
      result.push(tracker)
      return
    }

    for (let i = 0; i < choices.length; i++) {
      if (choices[i] === choices[i - 1]) {
        continue
      }
      traverse(
        [...tracker, choices[i]],
        choices.filter((_, index) => index !== i)
      )
    }
  }
  traverse([], sortedNums)
  return result
}
// @lc code=end
