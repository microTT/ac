/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function (k, n) {
  const choices = new Array(9).fill(1).map((v, i) => v + i)

  const result = []

  function traverse(leftNum, tracker, nums) {
    if (leftNum === 0 && tracker.length === k) {
      result.push(tracker)
      return
    }
    if (leftNum < 0) {
      return
    }
    if (tracker.length > k || (leftNum === 0 && tracker.length < k)) {
      return
    }

    for (let i = 0; i < nums.length; i++) {
      const current = nums[i]
      traverse(leftNum - current, [...tracker, current], nums.slice(i + 1))
    }
  }

  traverse(n, [], choices)
  return result
}
// @lc code=end
