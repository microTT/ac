/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
const NumMatrix = function (matrix) {
  this.preSumMatrix = []

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    const row = matrix[rowIndex]
    this.preSumMatrix[rowIndex] ||= []
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const num = row[colIndex]
      const reperatArea = this.preSumMatrix[rowIndex - 1]?.[colIndex - 1] || 0
      const topArea = this.preSumMatrix[rowIndex - 1]?.[colIndex] || 0
      const leftArea = this.preSumMatrix[rowIndex]?.[colIndex - 1] || 0
      this.preSumMatrix[rowIndex][colIndex] =
        topArea + leftArea + num - reperatArea
    }
  }
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  const repeatArea = this.preSumMatrix[row1 - 1]?.[col1 - 1] || 0
  const topArea = this.preSumMatrix[row1 - 1]?.[col2] || 0
  const leftArea = this.preSumMatrix[row2]?.[col1 - 1] || 0
  return this.preSumMatrix[row2][col2] - topArea - leftArea + repeatArea
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end
