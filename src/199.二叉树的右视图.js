/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
const rightSideView = function (root) {
  if (!root) {
    return []
  }

  function traverse(nodes) {
    if (!nodes.length) {
      return []
    }
    const current = nodes[nodes.length - 1].val
    return [
      current,
      ...traverse(
        nodes.reduce(
          (acc, node) => [...acc, node?.left, node?.right].filter(Boolean),
          []
        )
      ),
    ]
  }

  return traverse([root])
}
// @lc code=end
