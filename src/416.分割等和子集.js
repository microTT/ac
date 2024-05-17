/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
  if (!nums?.length) {
    return true
  }

  const sum = nums.reduce((acc, num) => acc + num, 0)
  const target = sum / 2

  const memo = []
  function dp(leftNum, index) {
    if (leftNum === 0) {
      return true
    }
    if (leftNum < 0 || index >= nums.length) {
      return false
    }
    if (typeof memo[leftNum]?.[index] === 'boolean') {
      return memo[leftNum]?.[index]
    }

    const result =
      dp(leftNum - nums[index], index + 1) || dp(leftNum, index + 1)

    memo[leftNum] ||= []
    memo[leftNum][index] = result
    return result
  }

  return dp(target, 0)
}
// @lc code=end
