/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const treeToDoublyList = function (root) {
  if (!root) {
    return null
  }

  let head = null

  let prev = null
  function traverse(node) {
    if (!node) {
      return null
    }
    const { left, right } = node

    traverse(left)

    if (!prev) {
      head = node
      prev = node
    } else {
      prev.right = node
      node.left = prev
      prev = node
    }

    traverse(right)
  }

  traverse(root)

  head.left = prev
  prev.right = head

  return head
}
