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
 * @param {TreeNode} u
 * @return {TreeNode}
 */
const findNearestRightNode = function (root, u) {
  if (!root || !u) {
    return null
  }

  let fund = false
  let target = null
  function traverse(nodes) {
    if (!nodes.length || fund) {
      return null
    }

    for (let index = 0; index < nodes.length; index++) {
      const node = nodes[index]
      if (node === u) {
        target = nodes[index + 1] || null
        fund = true
        return
      }
    }

    const next = nodes
      .map((node) => [node.left, node.right].filter(Boolean))
      .reduce((acc, list) => [...acc, ...list], [])

    traverse(next)
  }

  traverse([root])

  return target
}
