/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let dpProfit = [0]
  for (let index = 1; index < prices.length; index++) {
    const currentPrice = prices[index]
    const prevPrice = prices[index - 1]
    dpProfit[index] = currentPrice - prevPrice
  }
  return (
    dpProfit
      .filter((v) => v > 0)
      .reduce((allProfit, currentProfit) => allProfit + currentProfit, 0) || 0
  )
}
// @lc code=end
