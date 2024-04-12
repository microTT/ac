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
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (!root) {
    return root
  }
  const { left, right } = root
  root.left = right
  root.right = left
  invertTree(root.left)
  invertTree(root.right)

  return root
}
