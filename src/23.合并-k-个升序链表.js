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

function createPriorityQueue(sortFunction) {
  const storage = [null]

  function swap(index1, index2) {
    const tmp = storage[index1]
    storage[index1] = storage[index2]
    storage[index2] = tmp
  }

  // 下沉
  function sink(index) {
    let compareKey = null
    if (index * 2 + 1 < storage.length) {
      const isLeft = sortFunction(storage[index * 2], storage[index * 2 + 1])
      compareKey = isLeft ? index * 2 : index * 2 + 1
    } else if (index * 2 < storage.length) {
      compareKey = index * 2
    }
    if (compareKey && sortFunction(storage[compareKey], storage[index])) {
      swap(index, compareKey)
      sink(compareKey)
    }
  }

  // 上浮
  function swim(index) {
    if (index === 1) {
      return
    }
    const parentKey = Math.floor(index / 2)

    if (sortFunction(storage[index], storage[parentKey])) {
      swap(index, parentKey)
      swim(parentKey)
    }
  }

  function push(val) {
    storage.push(val)
    swim(storage.length - 1)
  }

  function pop() {
    if (storage.length === 1) {
      return null
    }
    swap(1, storage.length - 1)
    const target = storage.pop()
    sink(1)
    return target
  }
  return {
    push,
    pop,
  }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
  const resultDummy = new ListNode(-1)

  const priorityQueue = createPriorityQueue(
    (node1, node2) => node1.val < node2.val
  )
  while (lists.length) {
    let current = lists.pop()
    while (current) {
      priorityQueue.push(current)
      current = current.next
    }
  }

  let resultTraverse = resultDummy

  do {
    const current = priorityQueue.pop()
    if (!current) {
      break
    }
    resultTraverse.next = current
    resultTraverse = resultTraverse.next
  } while (true)

  resultTraverse.next = null

  return resultDummy.next
}
// @lc code=end
