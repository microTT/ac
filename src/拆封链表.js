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
 * @param {number} x
 * @return {ListNode}
 */
const partition = function (head, x) {
  const lowerList = new ListNode(null, null)
  const upperList = new ListNode(null, null)

  let traveLowerNode = lowerList
  let traveUpperNode = upperList

  let traveListNode = head

  while (traveListNode) {
    if (traveListNode.val < x) {
      traveLowerNode.next = traveListNode
    } else {
      traveUpperNode.next = traveListNode
    }
    traveListNode = traveListNode.next
  }

  traveUpperNode.next = null
  traveLowerNode.next = upperList.next

  return lowerList.next
}
