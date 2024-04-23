/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  const leftHeighMemo = []
  const rightHeighMemo = []
  for (let i = 0; i < height.length; i++) {
    leftHeighMemo[i] = Math.max(leftHeighMemo[i - 1] || -Infinity, height[i])
  }
  for (let i = height.length - 1; i >= 0; i--) {
    rightHeighMemo[i] = Math.max(rightHeighMemo[i + 1] || -Infinity, height[i])
  }
  function calcSigleLine(currentHeight, index, list) {
    const current =
      Math.min(leftHeighMemo[index], rightHeighMemo[index]) - currentHeight
    return current > 0 ? current : 0
  }

  const allLines = height.map((currentHeight, index, list) =>
    calcSigleLine(currentHeight, index, list)
  )

  return allLines.reduce((acc, line) => acc + line, 0)
}
// @lc code=end
