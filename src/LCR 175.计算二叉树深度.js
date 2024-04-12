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
const calculateDepth = function (root) {
  if (!root) {
    return 0
  }
  return Math.max(calculateDepth(root.left), calculateDepth(root.right)) + 1
}
