/*
 * @lc app=leetcode.cn id=1518 lang=javascript
 *
 * [1518] 换水问题
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = function (numBottles, numExchange) {
  return numBottles < numExchange
    ? numBottles
    : numBottles +
        Math.floor((numBottles - numExchange) / (numExchange - 1)) +
        1
}
// @lc code=end
