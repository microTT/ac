/*
 * @lc app=leetcode.cn id=623 lang=javascript
 *
 * [623] 在二叉树中增加一行
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

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
const addOneRow = function (root, val, depth) {
  if (depth === 1) {
    return new TreeNode(val, root)
  }
  function processNode(node) {
    const newLeft = new TreeNode(val, node.left)
    const newRight = new TreeNode(val, null, node.right)
    node.left = newLeft
    node.right = newRight
    return node
  }
  function traverse(nodes, currentDepth) {
    if (!nodes.length) {
      return null
    }
    if (currentDepth === depth - 1) {
      nodes.forEach(processNode)
      return
    }
    const next = nodes
      .map((node) => [node.left, node.right].filter(Boolean))
      .reduce((acc, list) => [...acc, ...list], [])
    traverse(next, currentDepth + 1)
  }

  traverse([root], 1)
  return root
}
// @lc code=end
