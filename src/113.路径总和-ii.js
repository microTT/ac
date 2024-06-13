/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSum = function (root, targetSum) {
  if (!root) {
    return []
  }

  let result = []

  function traverse(node, sum, path) {
    if (!node) {
      return
    }
    if (!node.left && !node.right) {
      if (sum === targetSum) {
        result.push(path)
      }
      return
    }
    traverse(node.left, sum + (node.left?.val || 0), [...path, node.left?.val])
    traverse(node.right, sum + (node.right?.val || 0), [
      ...path,
      node.right?.val,
    ])
  }

  traverse(root, root.val, [root.val])
  return result
}
// @lc code=end
