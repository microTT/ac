/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
const widthOfBinaryTree = function (root) {
  if (!root) {
    return 0
  }

  let max = 1

  function traverse(nodes) {
    if (!nodes.length) {
      return null
    }

    const children = nodes
      .map(({ node, index }) =>
        [
          node?.left ? { node: node.left, index: 2 * index } : null,
          node?.right ? { node: node.right, index: 2 * index + 1 } : null,
        ].filter(Boolean)
      )
      .reduce((acc, list) => [...acc, ...list], [])
    if (!children.length) {
      return null
    }
    const start = children.at(0).index
    const end = children.at(-1).index
    max = Math.max(max, end - start + 1)
    const resortedChildren = children.map((v) => ({
      ...v,
      index: v.index - start,
    }))

    traverse(resortedChildren)
  }
  traverse([{ node: root, index: 0 }])
  return max
}
// @lc code=end
