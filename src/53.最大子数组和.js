const maxSubArray = function (nums) {
  const dp = [nums[0]]

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
  }
  return Math.max(...dp)
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6)
console.log(maxSubArray([1]), 1)
console.log(maxSubArray([5, 4, -1, 7, 8]), 23)
