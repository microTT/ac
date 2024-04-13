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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function (inorder, postorder) {
  if (!postorder.length) {
    return null
  }
  const rootValue = postorder.slice(-1)[0]
  const inIndex = inorder.findIndex((v) => v === rootValue)

  const leftInOrder = inorder.slice(0, inIndex)
  const leftPostOrder = postorder.slice(0, leftInOrder.length)

  const rightInOrder = inorder.slice(inIndex + 1)
  const rightPostOrder = postorder.slice(leftInOrder.length, -1)

  return new TreeNode(
    rootValue,
    buildTree(leftInOrder, leftPostOrder),
    buildTree(rightInOrder, rightPostOrder)
  )
}
