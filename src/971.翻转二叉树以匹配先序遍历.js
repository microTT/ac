/*
 * @lc app=leetcode.cn id=971 lang=javascript
 *
 * [971] 翻转二叉树以匹配先序遍历
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
 * @param {number[]} voyage
 * @return {number[]}
 */
const flipMatchVoyage = function (root, voyage) {
  if (!root) {
    return []
  }

  let index = 0
  let canReserve = true
  const reserveNodes = []
  function traverse(node) {
    if (!canReserve) {
      return
    }
    if (!node) {
      return
    }
    if (node.val !== voyage[index]) {
      canReserve = false
      return
    }
    index += 1
    if (node.left && node.left.val !== voyage[index]) {
      const tmp = node.left
      node.left = node.right
      node.right = tmp
      reserveNodes.push(node.val)
    }
    traverse(root.left)
    traverse(root.right)
  }

  traverse(root)
  return canReserve ? reserveNodes : [-1]
}
// @lc code=end
