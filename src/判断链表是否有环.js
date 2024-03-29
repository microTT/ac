/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  if (!head) {
    return false;
  }

  let slowTraverse = head;
  let fastTraverse = head;

  while (fastTraverse && fastTraverse.next) {
    slowTraverse = slowTraverse.next;
    fastTraverse = fastTraverse.next.next;
    if (slowTraverse === fastTraverse) {
      return true;
    }
  }

  return false;
};