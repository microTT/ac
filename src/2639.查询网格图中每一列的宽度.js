/*
 * @lc app=leetcode.cn id=2639 lang=javascript
 *
 * [2639] 查询网格图中每一列的宽度
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const findColumnWidth = function (grid) {
  let result = []
  for (let col = 0; col < grid[0].length; col++) {
    result[col] ||= -Infinity
    for (let row = 0; row < grid.length; row++) {
      const cell = grid[row][col]
      const length = String(cell).length
      result[col] = Math.max(result[col], length)
    }
  }
  return result
}
// @lc code=end
