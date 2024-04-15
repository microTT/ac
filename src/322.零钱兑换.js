/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  if (!coins.length) {
    return -1
  }
  if (amount === 0) {
    return 0
  }
  const dp = [0]
  coins.forEach((coin) => {
    for (let current = coin; current <= amount; current++) {
      if (typeof dp[current - coin] !== 'number') {
        continue
      }
      dp[current] = Math.min(dp[current] || Infinity, dp[current - coin] + 1)
    }
  })
  return dp[amount] || -1
}

const coinChange1 = function (coins, amount) {
  if (!coins.length) {
    return -1
  }
  if (amount === 0) {
    return 0
  }
  const dp = [0]
  for (let current = 1; current <= amount; current++) {
    coins.forEach((coin) => {
      if (current < coin) {
        return
      }
      if (typeof dp[current - coin] !== 'number') {
        return
      }
      dp[current] = Math.min(dp[current] || Infinity, dp[current - coin] + 1)
    })
  }
  return dp[amount] || -1
}
