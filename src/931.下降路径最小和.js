/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
const minFallingPathSum = function (matrix) {
  let dp = []
  for (let index = 0; index < matrix[0].length; index++) {
    const current = matrix[0][index]
    dp[index] = current
  }

  function getNearMinCell(list, index) {
    const offsets = [-1, 0, 1]
    const nearIndexs = offsets
      .map((offset) => offset + index)
      .filter((v) => v >= 0 && v < list.length)
    return Math.min(...nearIndexs.map((i) => list[i]))
  }

  for (let rowIndex = 1; rowIndex < matrix.length; rowIndex++) {
    const row = matrix[rowIndex]
    const nextDP = []
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const cell = row[colIndex]
      nextDP[colIndex] = cell + getNearMinCell(dp, colIndex)
    }
    dp = nextDP
  }
  return Math.min(...dp)
}
// @lc code=end
