/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function (amount, coins) {
  if (!amount) {
    return 1
  }

  const memo = []

  function dp(leftAmount, index) {
    if (!leftAmount) {
      return 1
    }
    if (leftAmount < 0) {
      return 0
    }
    if (typeof memo[leftAmount]?.[index] === 'number') {
      return memo[leftAmount]?.[index]
    }

    let result = 0
    for (let currentIndex = index; currentIndex < coins.length; currentIndex++) {
      const current = coins[currentIndex]
      result += dp(leftAmount - current, currentIndex)
    }

    memo[leftAmount] ||= []
    memo[leftAmount][index] = result
    return result
  }

  return dp(amount, 0)
}
// @lc code=end
