/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
  const allChoices = new Array(n).fill(1).map((v, i) => v + i)

  const result = []
  function traverse(tracker, choices) {
    if (tracker.length === k) {
      result.push(tracker)
      return
    }
    if (!choices.length) {
      return
    }
    for (let i = 0; i < choices.length; i++) {
      traverse([...tracker, choices[i]], choices.slice(i + 1))
    }
  }

  traverse([], allChoices)

  return result
}
// @lc code=end
