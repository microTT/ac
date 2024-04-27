/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let traverse1 = m - 1
  let traverse2 = n - 1
  let position = m + n - 1
  while (traverse1 >= 0 || traverse2 >= 0) {
    const num1 = traverse1 < 0 ? -Infinity : nums1[traverse1]
    const num2 = traverse2 < 0 ? -Infinity : nums2[traverse2]
    if (num2 > num1) {
      nums1[position] = num2
      traverse2 -= 1
    } else {
      nums1[position] = num1
      traverse1 -= 1
    }
    position -= 1
  }
}
// @lc code=end
