/*
 * @lc app=leetcode.cn id=1314 lang=javascript
 *
 * [1314] 矩阵区域和
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
const matrixBlockSum = function (mat, k) {
  const preSumList = []
  for (let rowIndex = 0; rowIndex < mat.length; rowIndex++) {
    const row = mat[rowIndex]
    preSumList[rowIndex] ||= []
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const num = row[colIndex]
      const repeatArea = preSumList[rowIndex - 1]?.[colIndex - 1] || 0
      const topArea = preSumList[rowIndex - 1]?.[colIndex] || 0
      const leftArea = preSumList[rowIndex]?.[colIndex - 1] || 0
      preSumList[rowIndex][colIndex] = topArea + leftArea + num - repeatArea
    }
  }

  const answer = []

  for (let rowIndex = 0; rowIndex < mat.length; rowIndex++) {
    const row = mat[rowIndex]
    answer[rowIndex] ||= []
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const row1 = Math.max(rowIndex - k, 0)
      const col1 = Math.max(colIndex - k, 0)
      const row2 = Math.min(rowIndex + k, mat.length - 1)
      const col2 = Math.min(colIndex + k, row.length - 1)

      const repeatArea = preSumList[row1 - 1]?.[col1 - 1] || 0
      const topArea = preSumList[row1 - 1]?.[col2] || 0
      const leftArea = preSumList[row2]?.[col1 - 1] || 0
      answer[rowIndex][colIndex] =
        preSumList[row2][col2] + repeatArea - topArea - leftArea
    }
  }
  return answer
}
// @lc code=end
