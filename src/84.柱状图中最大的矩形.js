/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function (heights) {
  if (!heights.length) {
    return 0
  }

  const area = []

  const stack = [
    {
      val: 0,
      index: -1,
    },
  ]

  for (let index = 0; index <= heights.length; index++) {
    const current = index === heights.length ? -1 : heights[index]
    let currentWidthStart = index
    while (stack.length && stack[stack.length - 1].val > current) {
      const largest = stack.pop()
      currentWidthStart = largest.index
      area.push({ height: largest.val, width: index - largest.index })
    }
    stack.push({ val: current, index: currentWidthStart })
  }
  return Math.max(...area.map((v) => v.width * v.height))
}
// @lc code=end

// console.log(largestRectangleArea([2, 1, 2]))
