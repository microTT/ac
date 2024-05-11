/*
 * @lc app=leetcode.cn id=1110 lang=javascript
 *
 * [1110] 删点成林
 */

// @lc code=start
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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
const delNodes = function (root, to_delete) {
  if (!root || !to_delete.length) {
    return [root]
  }

  const deleteNodeMap = Object.fromEntries(to_delete.map((k) => [k, true]))

  const result = []
  function traverse(node) {
    if (!node) {
      return
    }

    traverse(node.left)
    traverse(node.right)
    if (deleteNodeMap[node.val]) {
      result.push(
        ...[node.left, node.right].filter(
          (node) => node && !deleteNodeMap[node.val]
        )
      )
    }
    if (deleteNodeMap[node.left?.val]) {
      node.left = null
    }
    if (deleteNodeMap[node.right?.val]) {
      node.right = null
    }
  }

  traverse(root)

  if (!deleteNodeMap[root.val]) {
    result.push(root)
  }

  return result
}
// @lc code=end
