/*
 * @lc app=leetcode.cn id=1026 lang=javascript
 *
 * [1026] 节点与其祖先之间的最大差值
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
 * @return {number}
 */
const maxAncestorDiff = function (root) {
  if (!root) {
    return 0
  }
  let max = -Infinity

  function traverse(node, maxValue, minValue) {
    if (!node) {
      return
    }

    max = Math.max(
      Math.abs(maxValue - node.val),
      max,
      Math.abs(minValue - node.val)
    )

    traverse(
      node.left,
      Math.max(maxValue, node.val),
      Math.min(node.val, minValue)
    )
    traverse(
      node.right,
      Math.max(maxValue, node.val),
      Math.min(node.val, minValue)
    )
  }

  traverse(root, root.val, root.val)
  return max
}
// @lc code=end
