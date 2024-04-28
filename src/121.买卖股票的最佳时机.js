/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let max = -Infinity
  let minPrice = prices[0]

  for (let index = 0; index < prices.length; index++) {
    const currentPrice = prices[index]
    max = Math.max(max, currentPrice - minPrice)
    minPrice = Math.min(minPrice, currentPrice)
  }

  return max <= 0 ? 0 : max
}
// @lc code=end
