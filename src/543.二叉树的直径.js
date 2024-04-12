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
const diameterOfBinaryTree = function (root) {
  let max = 0
  function traverse(node) {
    if (!node) {
      return 0
    }

    const leftDepth = traverse(node.left)
    const rightDepth = traverse(node.right)
    max = Math.max(max, leftDepth + rightDepth)
    return Math.max(leftDepth, rightDepth) + 1
  }

  traverse(root)
  return max
}
