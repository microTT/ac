/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
  if (!root) {
    return []
  }

  function traverse(node) {
    if (!node) {
      return []
    }
    const leftList = traverse(node.left)
    const rightList = traverse(node.right)
    if (!leftList.length && !rightList.length) {
      return [[node.val]]
    }
    return [...leftList, ...rightList].map((v) => [node.val, ...v])
  }

  return traverse(root).map((list) => list.join('->'))
}
// @lc code=end
