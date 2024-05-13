/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  if (!nums.length) {
    return 0
  }
  const preSumList = []
  const revSumList = []

  let left = 0
  let right = nums.length - 1
  while (right >= 0) {
    preSumList[left] = (preSumList[left - 1] || 0) + nums[left]
    revSumList[right] = (revSumList[right + 1] || 0) + nums[right]
    right--
    left++
  }

  for (let index = 0; index < preSumList.length; index++) {
    const preSum = preSumList[index - 1] || 0
    const revSum = revSumList[index + 1] || 0
    if (preSum === revSum) {
      return index
    }
  }
  return -1
}
// @lc code=end
