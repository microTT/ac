/*
 * @lc app=leetcode.cn id=998 lang=javascript
 *
 * [998] 最大二叉树 II
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

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoMaxTree = function (root, val) {
  if (!root) {
    return new TreeNode(val)
  }

  function build(node) {
    if (!node) {
      return new TreeNode(val)
    }
    if (node.val <= val) {
      return new TreeNode(val, node)
    }

    node.right = build(node.right)
    return node
  }

  return build(root)
}
// @lc code=end
