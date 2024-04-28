/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  const length = nums.length

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b)
  }

  const traverLength = gcd(k, length)
  for (let index = 0; index < traverLength; index++) {
    let start = index
    let caceStore = nums[index]
    do {
      const nextIndex = (start + k) % length
      const tmp = nums[nextIndex]
      nums[nextIndex] = caceStore
      caceStore = tmp
      start = nextIndex
    } while (start !== index)
  }
  // console.log(nums)
}
// @lc code=end

// console.log(rotate([1, 2, 3, 4], 2))
