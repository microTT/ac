/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function (nums, target) {
  if (!nums.length) {
    return 1
  }
  const dp = [1]
  for (let i = 1; i <= target; i++) {
    nums.forEach((num) => {
      dp[i] = (dp[i] || 0) + (dp[i - num] || 0)
    })
  }
  return dp[target]
}
