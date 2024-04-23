/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function (head, k) {
  if (!head) {
    return head
  }

  let newHead = null
  let currentReserveHead = null

  function traverse(node, index) {
    if (!node) {
      return null
    }
    if (index === k) {
      newHead = node
    }
    const tail = traverse(node.next, index + 1)
    if (index % k === 0) {
      node.next = currentReserveHead || tail
      currentReserveHead = node
    } else if (index % k !== 0 && currentReserveHead) {
      node.next = tail.next
      tail.next = node
    }

    return node
  }

  traverse(head, 1)
  return newHead
}
// @lc code=end
