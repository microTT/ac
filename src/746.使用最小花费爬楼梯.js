const minCostClimbingStairs = function (cost) {
  const dp = [cost[0], cost[1]]
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
  }
  return Math.min(dp[cost.length - 1], dp[cost.length - 2])
}

const minCostClimbingStairsT = function (cost) {
  const memo = {}
  function traverse(index) {
    if (index >= cost.length) {
      return 0
    }
    if (memo[index]) {
      return memo[index]
    }
    const leftCost = traverse(index + 1)
    const rightCose = traverse(index + 2)
    memo[index] = Math.min(leftCost, rightCose) + (cost[index] || 0)
    return memo[index]
  }
  return traverse(-1)
}

console.log(minCostClimbingStairs([10, 15, 20]), 15)
console.log(minCostClimbingStairsT([10, 15, 20]), 15)
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]), 6)
console.log(minCostClimbingStairsT([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]), 6)
