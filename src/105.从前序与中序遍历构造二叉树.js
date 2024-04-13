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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
  if (!preorder.length) {
    return null
  }
  const root = preorder[0]

  const index = inorder.findIndex((v) => v === root)
  const left = inorder.slice(0, index)
  const rigth = inorder.slice(index + 1)
  const leftNode = buildTree(preorder.slice(1, left.length + 1), left)
  const rightNode = buildTree(preorder.slice(left.length + 1), rigth)

  const rootNode = new TreeNode(root, leftNode, rightNode)
  return rootNode
}
