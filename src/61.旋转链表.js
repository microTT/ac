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
const rotateRight = function (head, k) {
  if (!head || k === 0) {
    return head
  }

  let tailNode = null
  let backN = null
  let n = 0
  let length = 0

  function traver(node) {
    if (!node) {
      return
    }
    if (!node.next) {
      tailNode = node
    }
    length++
    traver(node.next)
    n++
    if (n === (k % length) + 1) {
      backN = node
    }
  }
  traver(head)

  if (!backN.next) {
    return head
  }

  const newHead = backN.next
  backN.next = null
  tailNode.next = head
  return newHead
}
