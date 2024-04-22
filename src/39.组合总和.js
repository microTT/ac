/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  const result = []

  function traverse(leftNum, tracker, choices) {
    if (leftNum === 0) {
      result.push(tracker)
    }
    if (!choices.length) {
      return
    }
    if (leftNum < 0) {
      return
    }
    for (let i = 0; i < choices.length; i++) {
      const current = choices[i]

      traverse(leftNum - current, [...tracker, current], choices.slice(i))
    }
  }

  traverse(target, [], candidates)
  return result
}
// @lc code=end
