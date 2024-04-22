/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function (candidates, target) {
  const result = []
  const list = candidates.sort((v1, v2) => v1 - v2)
  function traverse(leftNum, tracker, choices) {
    if (leftNum < 0) {
      return
    }
    if (leftNum === 0) {
      result.push(tracker)
    }
    if (!choices.length) {
      return
    }
    for (let i = 0; i < choices.length; i++) {
      const current = choices[i]
      if (choices[i] === choices[i - 1]) {
        continue
      }
      traverse(leftNum - current, [...tracker, current], choices.slice(i + 1))
    }
  }

  traverse(target, [], list)
  return result
}
// @lc code=end
