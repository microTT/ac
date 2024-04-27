/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let traverse1 = 0
  let traverse2 = 1
  while (traverse2 < nums.length && traverse1 < nums.length - 1) {
    if (
      nums[traverse2] === nums[traverse1] &&
      nums[traverse1 - 1] === nums[traverse1]
    ) {
      traverse2 += 1
      continue
    }
    nums[traverse1 + 1] = nums[traverse2]
    traverse1 += 1
    traverse2 += 1
  }
  return traverse1 + 1
}
// @lc code=end
