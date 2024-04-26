const change = function (amount, coins) {
  const dp = [1]

  coins.forEach((coin) => {
    for (let current = coin; current <= amount; current++) {
      dp[current] = (dp[current] || 0) + (dp[current - coin] || 0)
    }
  })

  return dp[amount] || 0
}

const changeR = function (amount, coins) {
  const dp = [1]
  function traverse(leftAmount, coins) {
    // if (dp[leftAmount]) {
    //   return dp[leftAmount]
    // }

    for (let i = 0; i < coins.length; i++) {
      if (leftAmount < coins[i]) {
        continue
      }
      dp[leftAmount] =
        (dp[leftAmount] || 0) + traverse(leftAmount - coins[i], coins.slice(i))
    }

    return dp[leftAmount]
  }

  return traverse(amount, coins)
}

console.log(change(20, [1, 2]))
console.log(changeR(3, [1, 2]))
