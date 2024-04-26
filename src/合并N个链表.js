/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*
   1
 2   3
4 5 6

*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

class IMinPriorityQueue {
  data = [null]

  get size() {
    return this.data.length - 1 // 首位为空
  }

  parent(i) {
    return Math.floor(i / 2)
  }

  leftChild(i) {
    return 2 * i
  }

  rightChild(i) {
    return 2 * i + 1
  }

  isLess(i, k) {
    return this.data[i] < this.data[k]
  }

  swap(i, k) {
    const value = this.data[i]
    this.data[i] = this.data[k]
    this.data[k] = value
  }

  swim(i) {
    while (i > 1 && this.isLess(i, this.parent(i))) {
      this.swap(i, this.parent(i))
      i = this.parent(i)
    }
  }

  sink(i) {
    while (this.leftChild(i) <= this.size) {
      let min = this.leftChild(i)
      if (this.rightChild(i) <= this.size) {
        min = this.isLess(this.rightChild(i), this.leftChild(i))
          ? this.rightChild(i)
          : this.leftChild(i)
      }
      if (this.isLess(i, min)) {
        break
      }
      this.swap(i, min)
      i = min
    }
  }

  insert(value) {
    this.data[this.data.length] = value
    this.swim(this.size)
  }

  popMin() {
    if (this.size < 1) {
      return null
    }
    const min = this.data[1]
    this.swap(1, this.size)
    this.data.pop()
    this.sink(1)
    return min
  }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
  const resultList = new ListNode(null, null)
  let head = resultList

  const minPQ = new IMinPriorityQueue()

  lists.forEach((list) => {
    let trave = list
    while (trave) {
      minPQ.insert(trave.val)
      trave = trave.next
    }
  })

  do {
    const min = minPQ.popMin()
    if (min === null) {
      break
    }
    head.next = new ListNode(min, null)
    head = head.next
  } while (true)

  return resultList.next
}
