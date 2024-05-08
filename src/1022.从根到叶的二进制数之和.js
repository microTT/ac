/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
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
const sumRootToLeaf = function (root) {
  if (!root) {
    return 0
  }

  function traverse(node) {
    if (!node) {
      return []
    }
    const leftNums = traverse(node.left)
    const rightNums = traverse(node.right)

    const subNums = [...leftNums, ...rightNums]
    if (!subNums.length) {
      return [`${node.val}`]
    }
    return subNums.map((nums) => `${node.val}${nums}`)
  }

  const list = traverse(root)
  return list.reduce((acc, nums) => acc + parseInt(nums, 2), 0)
}
// @lc code=end
