/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  if (!nums.length) {
    return 0
  }

  function findMin(list, targetIndex) {
    const target = list[targetIndex]
    let minList = []
    for (let index = targetIndex - 1; index >= 0; index--) {
      const element = list[index]
      if (element < target) {
        minList.push(index)
      }
    }
    return minList
  }

  let dp = [1]
  for (let index = 1; index < nums.length; index++) {
    const prevIndexList = findMin(nums, index)
    const prev = prevIndexList.length
      ? Math.max(...prevIndexList.map((index) => dp[index]))
      : 0
    dp[index] = prev + 1
  }

  return Math.max(...dp)
}
// @lc code=end
