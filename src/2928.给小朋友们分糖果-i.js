/*
 * @lc app=leetcode.cn id=2928 lang=javascript
 *
 * [2928] 给小朋友们分糖果 I
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
const distributeCandies = function (n, limit) {
  const children = 3

  const result = []
  function treeBack(leftCount, tracker) {
    if (leftCount === 0 && tracker.length === children) {
      result.push(tracker)
    }

    if (leftCount > 0 && tracker.length >= children) {
      return
    }
    if (leftCount < 0) {
      return
    }
    if (tracker.length > children) {
      return
    }

    for (let index = 0; index <= limit; index++) {
      treeBack(leftCount - index, [...tracker, index])
    }
  }

  treeBack(n, [])

  return result.length
}
// @lc code=end
