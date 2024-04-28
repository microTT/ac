/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
  let store = { 0: 1 }
  let sum = 0
  let count = 0
  for (let index = 0; index < nums.length; index++) {
    const current = nums[index]
    sum = sum + current
    if (store[sum - k]) {
      count += store[sum - k]
    }
    if (store[sum]) {
      store[sum] += 1
    } else {
      store[sum] = 1
    }
  }
  return count
}
// @lc code=end
// console.log(subarraySum([1, 2, 3], 3))
