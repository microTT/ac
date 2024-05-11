/*
 * @lc app=leetcode.cn id=1315 lang=javascript
 *
 * [1315] 祖父节点值为偶数的节点和
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
const sumEvenGrandparent = function (root) {
  if (!root) {
    return 0
  }

  function traverse(node, parentVal, gradParentVal) {
    if (!node) {
      return 0
    }

    const leftSum = traverse(node.left, node.val, parentVal)
    const rightSum = traverse(node.right, node.val, parentVal)

    if (gradParentVal === null || gradParentVal % 2 === 1) {
      return leftSum + rightSum
    }
    return leftSum + rightSum + node.val
  }

  return traverse(root, null, null)
}
// @lc code=end
