/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
const sumNumbers = function (root) {
  if (!root) {
    return 0
  }
  function traverse(node) {
    if (!node) {
      return []
    }

    const leftNumStrings = traverse(node.left)
    const rightNumStrings = traverse(node.right)
    const current = [...leftNumStrings, ...rightNumStrings].map(
      (v) => `${node.val}${v}`
    )
    return current.length ? current : [node.val]
  }
  const numStrings = traverse(root)
  return numStrings.reduce((sum, val) => sum + Number(val), 0)
}
// @lc code=end
