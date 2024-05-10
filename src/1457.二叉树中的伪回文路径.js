/*
 * @lc app=leetcode.cn id=1457 lang=javascript
 *
 * [1457] 二叉树中的伪回文路径
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
 * @return {number}
 */
const pseudoPalindromicPaths = function (root) {
  if (!root) {
    return 0
  }

  function isPseudoPalindromicString(hashString = {}) {
    return (
      Object.values(hashString).filter((count) => count % 2 === 1).length <= 1
    )
  }

  let length = 0
  function traverse(node, hashString) {
    if (!node) {
      return
    }

    const nextHashString = {
      ...hashString,
      [node.val]: (hashString[node.val] || 0) + 1,
    }

    if (!node.left && !node.right) {
      length += isPseudoPalindromicString(nextHashString) ? 1 : 0
      return
    }

    traverse(node.left, nextHashString)

    traverse(node.right, nextHashString)
  }

  traverse(root, {})

  return length
}
// @lc code=end
