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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const constructFromPrePost = function (preorder, postorder) {
  if (!preorder.length) {
    return null
  }

  if (preorder.length === 1) {
    return new TreeNode(preorder[0], null, null)
  }

  const rootValue = preorder[0]

  const rightRootValue = postorder.slice(-2, -1)[0]
  const rightRootPreIndex = preorder.findIndex((v) => v === rightRootValue)

  const leftValues = preorder.slice(1, rightRootPreIndex)
  const rightValues = preorder.slice(rightRootPreIndex)

  return new TreeNode(
    rootValue,
    constructFromPrePost(leftValues, postorder.slice(0, leftValues.length)),
    constructFromPrePost(rightValues, postorder.slice(leftValues.length, -1))
  )
}

console.log(constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]))
