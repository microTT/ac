/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = function (nums) {
  const length = nums.length
  const result = []

  const stack = []
  for (let i = 2 * length - 1; i >= 0; i--) {
    const current = nums[i % length]
    while (stack.length && stack.at(-1) <= current) {
      stack.pop()
    }
    result[i] = stack.length ? stack.at(-1) : -1
    stack.push(current)
  }

  return result.slice(0, length)
}
// @lc code=end
