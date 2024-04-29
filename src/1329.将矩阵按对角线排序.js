/*
 * @lc app=leetcode.cn id=1329 lang=javascript
 *
 * [1329] 将矩阵按对角线排序
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const diagonalSort = function (mat) {
  function getNextCell([row, col], rowMax, colMax, directory = 'NEXT') {
    const next = directory === 'NEXT' ? [row + 1, col + 1] : [row - 1, col - 1]
    return next[0] >= 0 && next[0] < rowMax && next[1] >= 0 && next[1] < colMax
      ? next
      : null
  }

  function sortValues(values) {
    return values.sort((v1, v2) => v1 - v2)
  }

  const rowMax = mat.length
  const colMax = mat[0]?.length || 0

  for (let index = 0; index < colMax; index++) {
    let start = [0, index]
    const currentList = []
    while (start) {
      currentList.push(start)
      start = getNextCell(start, rowMax, colMax)
    }
    const sortedValues = sortValues(
      currentList.map((position) => mat[position[0]][position[1]])
    )
    currentList.forEach((position, index) => {
      mat[position[0]][position[1]] = sortedValues[index]
    })
  }

  for (let index = 1; index < rowMax; index++) {
    let start = [index, 0]
    const currentList = []
    while (start) {
      currentList.push(start)
      start = getNextCell(start, rowMax, colMax)
    }
    const sortedValues = sortValues(
      currentList.map((position) => mat[position[0]][position[1]])
    )
    currentList.forEach((position, index) => {
      mat[position[0]][position[1]] = sortedValues[index]
    })
  }

  return mat
}
// @lc code=end
