/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
const sortList = function (head) {
  if (!head) {
    return head
  }

  class ProrityQueue {
    constructor(compareFunction = v1 < v2) {
      this._compareFunction = compareFunction
      this.storage = [null]
    }

    getSize() {
      return this.storage.length - 1
    }

    getParent(index) {
      if (index <= 1) {
        return null
      }
      return Math.floor(index / 2)
    }

    getLeft(index) {
      const leftIndex = index * 2
      return leftIndex >= this.storage.length ? null : leftIndex
    }

    getRight(index) {
      const rightIndex = index * 2 + 1
      return rightIndex >= this.storage.length ? null : rightIndex
    }

    compare(index1, index2) {
      return this._compareFunction(this.storage[index1], this.storage[index2])
    }

    pop() {
      if (this.storage.length <= 1) {
        return null
      }
      this.swap(1, this.storage.length - 1)
      const target = this.storage.pop()
      this.sink(1)
      return target
    }

    insert(val) {
      this.storage.push(val)
      this.swim(this.storage.length - 1)
    }

    swim(index) {
      const parentIndex = this.getParent(index)
      if (!parentIndex) {
        return
      }
      if (this.compare(index, parentIndex)) {
        this.swap(index, parentIndex)
        this.swim(parentIndex)
      }
    }

    sink(index) {
      const leftIndex = this.getLeft(index)
      if (!leftIndex) {
        return
      }
      const rightIndex = this.getRight(index)
      const compareIndex =
        rightIndex && this.compare(rightIndex, leftIndex)
          ? rightIndex
          : leftIndex
      if (this.compare(compareIndex, index)) {
        this.swap(compareIndex, index)
        this.sink(compareIndex)
      }
    }

    swap(index1, index2) {
      const tmp = this.storage[index1]
      this.storage[index1] = this.storage[index2]
      this.storage[index2] = tmp
    }
  }

  const pq = new ProrityQueue((node1, node2) => node1.val < node2.val)

  function traverse(node) {
    if (!node) {
      return null
    }
    pq.insert(node)
    traverse(node.next)
    node.next = null
  }

  traverse(head)

  const dummy = new ListNode(null)
  let trav = dummy
  while (pq.getSize()) {
    trav.next = pq.pop()
    trav = trav.next
  }

  return dummy.next
}
// @lc code=end
