/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function (head, left, right) {
  if (!head) {
    return head
  }

  if (left === right) {
    return head
  }

  let index = 1
  let reserveHeader = null

  function traverse(node) {
    if (!node) {
      return null
    }
    index++
    const tail = traverse(node.next)
    index--
    if (index === right) {
      reserveHeader = node
    }
    if (index < right && index > left - 1 && tail) {
      node.next = tail.next
      tail.next = node
    }
    if (index === left - 1) {
      node.next = reserveHeader
    }
    return node
  }

  traverse(head)
  return left === 1 ? reserveHeader : head
}
// @lc code=end
