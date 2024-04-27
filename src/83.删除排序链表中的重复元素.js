/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head
  }
  let slow = head
  let fast = head
  while (fast) {
    if (fast.val === slow.val) {
      fast = fast.next
      continue
    }
    slow.next = fast
    slow = slow.next
    fast = fast.next
  }
  slow.next = null
  return head
}
// @lc code=end
