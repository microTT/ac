/*
 * @lc app=leetcode.cn id=1448 lang=javascript
 *
 * [1448] 统计二叉树中好节点的数目
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
const goodNodes = function (root) {
  if (!root) {
    return 0
  }

  let count = 0
  function traverse(node, maxVal) {
    if (!node) {
      return
    }

    if (node.val >= maxVal) {
      count += 1
    }

    const nextMax = Math.max(node.val, maxVal)

    traverse(node.left, nextMax)
    traverse(node.right, nextMax)
  }

  traverse(root, root.val)
  return count
}
// @lc code=end
