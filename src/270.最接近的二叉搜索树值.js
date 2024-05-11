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
 * @param {number} target
 * @return {number}
 */
const closestValue = function (root, target) {
  if (!root) {
    return null
  }

  let left = root.val
  let right = root.val
  let hit = null
  function traverse(node) {
    if (hit === target) {
      return
    }
    if (!node) {
      return
    }
    if (node.val === target) {
      hit = target
    }

    if (node.val > target) {
      right = node.val
      traverse(node.left)
    } else {
      left = node.val
      traverse(node.right)
    }
  }

  traverse(root)
  if (hit) {
    return hit
  }
  if (Math.abs(left - target) < Math.abs(right - target)) {
    return left
  } else if (Math.abs(left - target) > Math.abs(right - target)) {
    return right
  } else {
    return Math.min(left, right)
  }
}
