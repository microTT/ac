/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  const rowLength = grid.length
  const colLenght = grid[0].length

  function calcIsland(rowIndex, colIndex) {
    if (
      rowIndex < 0 ||
      rowIndex >= rowLength ||
      colIndex < 0 ||
      colIndex >= colLenght
    ) {
      return
    }
    if (String(grid[rowIndex][colIndex]) !== '1') {
      return
    }
    grid[rowIndex][colIndex] = '-1'
    calcIsland(rowIndex + 1, colIndex)
    calcIsland(rowIndex - 1, colIndex)
    calcIsland(rowIndex, colIndex + 1)
    calcIsland(rowIndex, colIndex - 1)
  }

  let count = 0
  for (let rowIndex = 0; rowIndex < rowLength; rowIndex++) {
    for (let colIndex = 0; colIndex < colLenght; colIndex++) {
      const cell = grid[rowIndex][colIndex]
      if (cell === '1') {
        count += 1
        calcIsland(rowIndex, colIndex)
      }
    }
  }
  return count
}
// @lc code=end
