/*
 * @lc app=leetcode.cn id=993 lang=javascript
 *
 * [993] 二叉树的堂兄弟节点
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = function (root, x, y) {
  if (!root) {
    return false
  }

  let judgeSuccess = false
  function traverse(childrenList) {
    if (judgeSuccess) {
      return
    }
    if (!childrenList.length) {
      return
    }

    let xParentIndex = null
    let yParentIndex = null

    for (
      let parentIndex = 0;
      parentIndex < childrenList.length;
      parentIndex++
    ) {
      const [left, right] = childrenList[parentIndex]
      if (x === left?.val || x === right?.val) {
        xParentIndex = parentIndex + 1
      }
      if (y === left?.val || y === right?.val) {
        yParentIndex = parentIndex + 1
      }
    }

    if (xParentIndex && yParentIndex && xParentIndex !== yParentIndex) {
      judgeSuccess = true
    }

    const next = childrenList
      .flat()
      .map((node) => [node.left, node.right].filter(Boolean))

    traverse(next)
  }

  traverse([[root]])
  return judgeSuccess
}
// @lc code=end
