/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  if (!head) {
    return head
  }

  const dummy = new ListNode(-1)
  dummy.next = head

  let length = 0

  function traverse(node, prev, index) {
    if (!node) {
      return null
    }
    length++
    traverse(node.next, prev.next, index + 1)
    if (n > length) {
      return
    }
    if (length - index === n) {
      prev.next = node.next
    }
  }
  traverse(dummy.next, dummy, 0)
  return dummy.next
}
// @lc code=end
