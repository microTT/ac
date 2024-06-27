/*
 * @lc app=leetcode.cn id=2265 lang=javascript
 *
 * [2265] 统计值等于子树平均值的节点数
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
const averageOfSubtree = function (root) {
  let count = 0

  function traverse(node) {
    if (!node) {
      return [0, 0]
    }

    const [leftSum, leftCount] = traverse(node.left)
    const [rightSum, rightCount] = traverse(node.right)

    const currentSum = leftSum + rightSum + node.val
    const currentCount = leftCount + rightCount + 1

    if (Math.floor(currentSum / currentCount) === node.val) {
      count++
    }

    return [currentSum, currentCount]
  }

  traverse(root)

  return count
}
// @lc code=end
