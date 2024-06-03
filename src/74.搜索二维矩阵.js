/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  const rowLength = matrix.length
  const colLength = matrix[0].length

  function getCellNo(rowIndex, colIndex) {
    return rowIndex * colLength + colIndex
  }

  function getCellIndex(no) {
    const rowIndex = Math.floor(no / colLength)
    const colIndex = no % colLength
    return [rowIndex, colIndex]
  }

  let left = 0
  let right = getCellNo(rowLength - 1, colLength - 1)

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    const index = getCellIndex(mid)
    const cell = matrix[index[0]][index[1]]
    if (cell === target) {
      return true
    } else if (cell > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return false
}
// @lc code=end
