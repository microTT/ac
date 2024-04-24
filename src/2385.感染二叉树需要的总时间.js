/*
 * @lc app=leetcode.cn id=2385 lang=javascript
 *
 * [2385] 感染二叉树需要的总时间
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
 * @param {number} start
 * @return {number}
 */
const amountOfTime = function (root, start) {
  if (!root) {
    return 0
  }

  const parentMap = {}
  let targetNode = null
  function assembly(node) {
    if (!node) {
      return
    }
    if (node.val === start) {
      targetNode = node
    }

    if (targetNode) {
      return
    }

    if (node.left) {
      parentMap[node.left.val] = node
    }

    if (node.right) {
      parentMap[node.right.val] = node
    }

    assembly(node.left)
    assembly(node.right)
  }

  assembly(root)

  function calcMaxDepth(node, from) {
    if (!node) {
      return 0
    }
    const maxDepth =
      Math.max(
        ...[node.left, node.right, parentMap[node.val]]
          .filter((v) => v !== from)
          .map((v) => calcMaxDepth(v, node))
      ) + 1
    return maxDepth
  }

  return calcMaxDepth(targetNode, targetNode) - 1
}
// @lc code=end
