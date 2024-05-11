/*
 * @lc app=leetcode.cn id=894 lang=javascript
 *
 * [894] 所有可能的真二叉树
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
 * @param {number} n
 * @return {TreeNode[]}
 */
const allPossibleFBT = function (n) {
  if (n % 2 === 0) {
    return []
  }

  function build(nodeNum) {
    if (nodeNum === 0) {
      return []
    }

    const childrenNum = nodeNum - 1

    if (childrenNum === 0) {
      return [new TreeNode(0)]
    }

    let result = []
    for (let leftNum = 1; leftNum < childrenNum; leftNum = leftNum + 2) {
      const rightNum = childrenNum - leftNum
      if (rightNum % 2 === 0) {
        continue
      }
      const leftCompositions = build(leftNum)
      const rightCompositons = build(childrenNum - leftNum)
      result.push(
        ...leftCompositions
          .map((left) =>
            rightCompositons.map((right) => new TreeNode(0, left, right))
          )
          .flat()
      )
    }
    return result
  }

  return build(n)
}
// @lc code=end
