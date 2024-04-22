/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const result = []

  function traverse(tracker, choices) {
    result.push(tracker)
    for (let i = 0; i < choices.length; i++) {
      traverse([...tracker, choices[i]], choices.slice(i + 1))
    }
  }

  traverse([], nums)
  return result
}
// @lc code=end
