/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
  if (!head) {
    return null
  }
  let fast = head
  let slow = head
  let meetNode = null
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      meetNode = fast
      break
    }
  }
  if (!meetNode) {
    return null
  }

  slow = head
  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }
  return fast
}
