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

  let left = head

  function traverse(right) {
    if (!right) {
      return null
    }

    traverse(right.next)
    if (right.val !== left.val) {
      result = false
    }
    left = left.next
  }

  traverse(head)

  return result
}
// @lc code=end
