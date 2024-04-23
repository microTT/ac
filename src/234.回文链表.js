/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  let result = true

  const nodes = []
  let length = 0
  function traverse(node, index) {
    if (!node) {
      length = index
      return null
    }

    nodes.push(node)
    traverse(node.next, index + 1)
    if (node.val !== nodes[length - index - 1].val) {
      result = false
    }
  }

  traverse(head, 0)

  return result
}
// @lc code=end
