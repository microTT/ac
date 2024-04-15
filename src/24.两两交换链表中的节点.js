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
const swapPairs = function (head) {
  const dummy = new ListNode(-1)
  dummy.next = head

  let traverNode = dummy
  while (traverNode.next && traverNode.next.next) {
    const next = traverNode.next
    const nextNext = next.next
    const leftNode = nextNext.next

    next.next = leftNode
    nextNext.next = next
    traverNode.next = nextNext
    traverNode = next
  }
  return dummy.next
}
