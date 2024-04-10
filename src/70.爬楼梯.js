
const climbStairs = function (n) {
  const dp = [1, 1, 2]
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

const climbStairsI = function (n) {
  const dp = [1]
  const steps = [1, 2]
  steps.forEach((step) => {
    for (let i = step; i <= n; i++) {
      dp[i] = (dp[i] || 0) + (dp[i - step] || 0)
    }
  })
  return dp[n]
}

const climbStairsR = function (n) {
  const choice = [1, 2]
  const memo = [1, 2]

  function traverse(leftStep, choice) {
    if (leftStep === 1) {
      return 1
    }
    if (leftStep === 2) {
      return 2
    }

    if (memo[leftStep]) {
      return memo[leftStep]
    }

    choice.forEach((step) => {
      if (leftStep <= step) {
        return
      }
      memo[leftStep] = (memo[leftStep] || 0) + traverse(leftStep - step, choice)
    })

    return memo[leftStep]
  }

  return traverse(n, choice)
}

console.log(climbStairs(20))
console.log(climbStairsI(20))
console.log(climbStairsR(20))
