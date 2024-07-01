/*
 * @lc app=leetcode.cn id=2413 lang=javascript
 *
 * [2413] 最小偶倍数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const smallestEvenMultiple = function (n) {
  if (n % 2 === 0) {
    return n
  } else {
    return n * 2
  }
}
// @lc code=end
