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
const longestConsecutive = function (root) {
  if (!root) {
    return 0
  }

  let max = 0
  function traverse(node, paths) {
    if (!node) {
      max = Math.max(max, paths.length)
      return
    }
    let nextPaths = []
    if (!paths.length || node.val - paths.at(-1) === 1) {
      nextPaths = [...paths, node.val]
    } else {
      max = Math.max(max, paths.length)
      nextPaths = [node.val]
    }
    traverse(node.left, nextPaths)

    traverse(node.right, nextPaths)
  }

  traverse(root, [])

  return max
}
