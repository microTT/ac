/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let overflow = 0
  const result = new ListNode(-1)

  let traverse1 = l1
  let traverse2 = l2
  let traverseResult = result

  while (traverse1 || traverse2 || overflow) {
    const current = (traverse1?.val || 0) + (traverse2?.val || 0) + overflow
    overflow = current >= 10 ? 1 : 0
    const left = current - overflow * 10
    const node = new ListNode(left)
    traverseResult.next = node

    traverse1 = traverse1?.next
    traverse2 = traverse2?.next
    traverseResult = traverseResult.next
  }

  return result.next
}
// @lc code=end
