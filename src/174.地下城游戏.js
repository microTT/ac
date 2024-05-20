/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
const calculateMinimumHP = function (dungeon) {
  const memo = []
  const rowLength = dungeon.length || 0
  const colLength = dungeon[0]?.length || 0
  function dp(rowIndex, colIndex) {
    if (rowIndex === rowLength - 1 && colIndex === colLength - 1) {
      return dungeon[rowIndex][colIndex] > 0
        ? 1
        : -dungeon[rowIndex][colIndex] + 1
    }
    if (rowIndex >= rowLength || colIndex >= colLength) {
      return 999999999
    }

    if (typeof memo[rowIndex]?.[colIndex] === 'number') {
      return memo[rowIndex][colIndex]
    }

    const cell = dungeon[rowIndex][colIndex]

    const result =
      Math.min(dp(rowIndex + 1, colIndex), dp(rowIndex, colIndex + 1)) - cell
    return result > 0 ? result : 1
  }

  const result = dp(0, 0)
  return result
}
// @lc code=end