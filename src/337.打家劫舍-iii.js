/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
 * @return {number}
 */
const rob = function (root) {
  const memo = new TreeNode(null)

  function travere(node, memo) {
    if (!node) {
      memo.val = 0
      return
    }

    memo.left ||= new TreeNode(null)
    memo.right ||= new TreeNode(null)

    travere(node.left, memo.left)
    travere(node.right, memo.right)

    memo.val = Math.max(
      memo.left.val + memo.right.val,
      node.val +
        (memo.left.left?.val || 0) +
        (memo.left.right?.val || 0) +
        (memo.right.left?.val || 0) +
        (memo.right.right?.val || 0)
    )
  }

  travere(root, memo)
  return memo.val
}

// @lc code=end
