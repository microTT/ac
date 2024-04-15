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
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = function (root) {
  const subTree = {}
  let result = []
  function traverse(node) {
    if (!node) {
      return 'NULL'
    }
    const leftString = traverse(node.left)
    const rightString = traverse(node.right)
    const current = [node.val, leftString, rightString]
      .join('_')
    if (subTree[current] === 1) {
      result = result.concat(node)
    }
    subTree[current] = (subTree[current] || 0) + 1
    return current
  }
  traverse(root)
  return result
}
