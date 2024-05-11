/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
const sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0
  }

  function traverse(node, sum, isLeft) {
    if (!node) {
      return 0
    }

    if (!node.left && !node.right) {
      return isLeft ? node.val : 0
    }

    const left = traverse(node.left, sum, true)
    const right = traverse(node.right, sum, false)
    return sum + left + right
  }

  return traverse(root, 0, false)
}
// @lc code=end
