/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  const memo = []

  const rowLength = grid.length || 0
  const colLength = grid[0]?.length || 0

  function dp(rowIndex, colIndex) {
    if (rowIndex === rowLength - 1 && colIndex === colLength - 1) {
      return grid[rowIndex][colIndex]
    }
    if (rowIndex >= rowLength || colIndex >= colLength) {
      return 999999 //  代替Infinty
    }

    if (typeof memo[rowIndex]?.[colIndex] === 'number') {
      return memo[rowIndex]?.[colIndex]
    }

    const result = Math.min(
      dp(rowIndex + 1, colIndex) + grid[rowIndex][colIndex],
      dp(rowIndex, colIndex + 1) + grid[rowIndex][colIndex]
    )

    memo[rowIndex] ||= []
    memo[rowIndex][colIndex] = result

    return result
  }

  return dp(0, 0)
}
// @lc code=end
