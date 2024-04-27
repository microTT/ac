/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head
  }

  const dummy = new ListNode(Infinity, head)

  let current = dummy
  while (current?.next && current?.next.next) {
    if (current.next.val === current.next.next.val) {
      const removedValue = current.next.val
      while (current.next?.val === removedValue) {
        current.next = current.next?.next
      }
    } else {
      current = current.next
    }
  }

  return dummy.next
}
// @lc code=end
