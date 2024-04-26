/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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

function priorityQueue() {}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
  const resultDummy = new ListNode(-1)

  let links = lists.filter(Boolean)
  let resultTraverse = resultDummy
  while (links.some(Boolean)) {
    const currentValues = links.map((node) => node.val)
    const minValue = Math.min(...currentValues)
    const minNodeIndex = links.findIndex((node) => node.val === minValue)
    resultTraverse.next = links[minNodeIndex]

    resultTraverse = resultTraverse.next
    links[minNodeIndex] = links[minNodeIndex].next

    links = links.filter(Boolean)
  }
  return resultDummy.next
}
// @lc code=end
