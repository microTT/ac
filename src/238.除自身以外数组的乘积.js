/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const dpLeft = []
  const dpRigt = []
  const result = []
  for (let index = 0; index < nums.length; index++) {
    const current = nums[index]

    dpLeft[index] = index === 0 ? current : dpLeft[index - 1] * current
  }

  for (let index = nums.length - 1; index >= 0; index--) {
    const current = nums[index]

    dpRigt[index] =
      index === nums.length - 1 ? current : dpRigt[index + 1] * current
  }

  for (let index = 0; index < nums.length; index++) {
    const left = index > 0 ? dpLeft[index - 1] : 1
    const right = index < nums.length - 1 ? dpRigt[index + 1] : 1

    result[index] = left * right
  }
  return result
}
// @lc code=end
