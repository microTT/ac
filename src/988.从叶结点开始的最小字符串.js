/*
 * @lc app=leetcode.cn id=988 lang=javascript
 *
 * [988] 从叶结点开始的最小字符串
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
 * @return {string}
 */
const smallestFromLeaf = function (root) {
  if (!root) {
    return ''
  }

  function traverse(node) {
    if (!node) {
      return []
    }
    const leftList = traverse(node.left)
    const rightList = traverse(node.right)

    const current = String.fromCharCode('a'.charCodeAt(0) + node.val)

    if (!leftList.length && !rightList.length) {
      return [current]
    }

    return [...leftList, ...rightList]
      .filter(Boolean)
      .map((v) => `${v}${current}`)
  }

  return traverse(root).reduce((min, current) =>
    current > min ? min : current
  )
}
// @lc code=end
