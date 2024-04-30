9
/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const rowCheck = []
  const colCheck = []
  const gridCheck = []

  function pushNumsInCheck(rowIndex, colIndex, num) {
    const gridRowIndex = Math.floor(rowIndex / 3)
    const gridColIndex = Math.floor(colIndex / 3)

    rowCheck[rowIndex] ||= {}
    colCheck[colIndex] ||= {}
    gridCheck[gridRowIndex] ||= []
    gridCheck[gridRowIndex][gridColIndex] ||= {}

    rowCheck[rowIndex][num] = (rowCheck[rowIndex][num] || 0) + 1
    colCheck[colIndex][num] = (colCheck[colIndex][num] || 0) + 1
    gridCheck[gridRowIndex][gridColIndex][num] =
      (gridCheck[gridRowIndex][gridColIndex][num] || 0) + 1
  }

  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    const currentRow = board[rowIndex]
    for (let colIndex = 0; colIndex < currentRow.length; colIndex++) {
      const currentCell = currentRow[colIndex]
      if (currentCell !== '.') {
        pushNumsInCheck(rowIndex, colIndex, currentCell)
      }
    }
  }

  for (let index = 0; index < 9; index++) {
    const row = rowCheck[index] || {}
    if (Object.values(row).some((count) => count > 1)) {
      return false
    }
  }

  for (let index = 0; index < 9; index++) {
    const col = colCheck[index] || {}
    if (Object.values(col).some((count) => count > 1)) {
      return false
    }
  }

  for (let index = 0; index < 9; index++) {
    const row = Math.floor(index / 3)
    const col = index % 3
    if (
      Object.values(gridCheck?.[row]?.[col] || {}).some((count) => count > 1)
    ) {
      return false
    }
  }
  return true
}
// @lc code=end
