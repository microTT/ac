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
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = function (nums) {
  if (!nums.length) {
    return null
  }

  const rootValue = Math.max(...nums)
  const rootIndex = nums.findIndex((value) => value === rootValue)
  const leftValues = nums.slice(0, rootIndex)
  const rightValues = nums.slice(rootIndex + 1)

  return new TreeNode(
    rootValue,
    constructMaximumBinaryTree(leftValues),
    constructMaximumBinaryTree(rightValues)
  )
}
