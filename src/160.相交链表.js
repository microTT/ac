/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null
  }
  let traverseA = headA
  let traverseB = headB

  while (traverseA !== traverseB) {
    if (!traverseA) {
      traverseA = headB
    } else {
      traverseA = traverseA.next
    }
    if (!traverseB) {
      traverseB = headA
    } else {
      traverseB = traverseB.next
    }
  }
  return traverseA
}
