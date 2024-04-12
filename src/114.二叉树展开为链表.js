
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function (root) {
  if (!root) {
    return null
  }

  function traverse(node) {
    if (!node) {
      return []
    }
    return [node, ...traverse(node.left), ...traverse(node.right)]
  }

  const nodes = traverse(root)

  nodes.forEach((node, index, list) => {
    node.left = null
    node.right = list[index + 1] || null
  })

  return nodes[0]
}
