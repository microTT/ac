/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
  const reserveList = new ListNode(null)

  let length = 0
  let reserve = reserveList
  function traverse(node, index) {
    if (!node) {
      return
    }
    length++
    traverse(node.next, index + 1)
    if (index > Math.ceil(length / 2)) {
      reserve.next = node
      node.next = null
      reserve = reserve.next
    } else if (index === Math.ceil(length / 2)) {
      node.next = null
    }
  }
  traverse(head, 1)

  const reorder = new ListNode(null)

  let left = head
  let right = reserveList.next

  let traverReorder = reorder
  while (left && right) {
    traverReorder.next = left
    left = left.next
    traverReorder.next.next = right
    right = right.next
    traverReorder = traverReorder.next.next
  }

  if (left) {
    traverReorder.next = left
    traverReorder = traverReorder.next
  }
  if (right) {
    traverReorder.next = right
    traverReorder = traverReorder.next
  }

  traverReorder.next = null
  return reorder.next
}
// @lc code=end
