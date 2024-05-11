/*
 * @lc app=leetcode.cn id=987 lang=javascript
 *
 * [987] 二叉树的垂序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const verticalTraversal = function (root) {
  if (!root) {
    return []
  }
  const positiveGrid = []
  const nagivateGrid = []

  function pushInGrid(val, rowIndex, colIndex) {
    const grid = colIndex >= 0 ? positiveGrid : nagivateGrid
    const gridColIndex = Math.abs(colIndex)
    grid[gridColIndex] ||= []
    const row = grid[gridColIndex]
    row[rowIndex] ||= []
    row[rowIndex].push(val)
    row[rowIndex] = row[rowIndex].sort((v1, v2) => v1 - v2)
  }

  function traverse(node, rowIndex, colIndex) {
    if (!node) {
      return null
    }

    pushInGrid(node.val, rowIndex, colIndex)

    traverse(node.left, rowIndex + 1, colIndex - 1)
    traverse(node.right, rowIndex + 1, colIndex + 1)
  }

  traverse(root, 0, 0)

  const grid = []
  for (let colIndex = nagivateGrid.length - 1; colIndex > 0; colIndex--) {
    let row = nagivateGrid[colIndex]
    row = row.flat()
    grid.push(row)
  }

  for (let colIndex = 0; colIndex < positiveGrid.length; colIndex++) {
    let row = positiveGrid[colIndex]
    row = row.flat()
    grid.push(row)
  }

  return grid
}
// @lc code=end
