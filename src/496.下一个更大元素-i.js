/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function (nums1, nums2) {
  const nextBiggerList = []

  const stack = []

  for (let i = nums2.length - 1; i >= 0; i--) {
    const current = nums2[i]
    while (stack.length && current >= stack.at(-1)) {
      stack.pop()
    }
    const index = nums1.indexOf(current)
    nextBiggerList[index] = stack.length ? stack.at(-1) : -1
    stack.push(current)
  }
  return nextBiggerList
}
// @lc code=end
