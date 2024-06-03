/*
 * @lc app=leetcode.cn id=743 lang=javascript
 *
 * [743] 网络延迟时间
 */

// @lc code=start
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const networkDelayTime = function (times, n, k) {
  const grap = []
  for (let index = 0; index < times.length; index++) {
    const [node, target, weight] = times[index]
    grap[node] ||= {
      children: [],
      cost: {},
    }
    grap[node].children.push(target)
    grap[node].cost[target] = weight
  }

  function getWeight(node, target) {
    return grap[node].cost[target]
  }

  function getChildren(node) {
    return grap[node]?.children || []
  }

  class PriorityQueue {
    constructor(compareFunction = (v1, v2) => v1 < v2) {
      this._compareFunction = compareFunction
      this._queue = [null]
    }

    getSize() {
      return this._queue.length - 1
    }

    push(val) {
      this._queue.push(val)
      this._swim(this._queue.length - 1)
    }

    pop() {
      this._swap(1, this._queue.length - 1)
      const target = this._queue.pop()
      this._sink(1)
      return target
    }

    _getParent(index) {
      return Math.floor(index / 2)
    }

    _getLeftChild(index) {
      return index * 2
    }

    _getRightChild(index) {
      return index * 2 + 1
    }

    _compare(index1, index2) {
      return this._compareFunction(this._queue[index1], this._queue[index2])
    }

    _swap(index1, index2) {
      const tmp = this._queue[index1]
      this._queue[index1] = this._queue[index2]
      this._queue[index2] = tmp
    }

    _swim(index) {
      if (index <= 1) {
        return
      }
      const parent = this._getParent(index)
      if (this._compare(parent, index)) {
        this._swap(parent, index)
        this._swim(parent)
      }
    }

    _sink(index) {
      const left = this._getLeftChild(index)
      if (left > this._queue.length - 1) {
        return
      }
      const right = this._getRightChild(index)
      const swtichIndex =
        right <= this._queue.length - 1 && this._compare(left, right)
          ? right
          : left
      if (this._compare(swtichIndex, index)) {
        this._swap(swtichIndex, index)
        this._sink(swtichIndex)
      }
    }
  }

  function createNode(node, pathFromStart) {
    return { node, pathFromStart }
  }

  const miniPQ = new PriorityQueue(
    (node1, node2) => node1.pathFromStart < node2.pathFromStart
  )

  const distTo = new Array(n + 1).fill(Infinity)
  distTo[0] = 0
  distTo[k] = 0

  miniPQ.push(createNode(k, 0))

  while (miniPQ.getSize()) {
    const current = miniPQ.pop()
    if (distTo[current.node] < current.pathFromStart) {
      continue
    }
    const children = getChildren(current.node)

    children.forEach((child) => {
      const weight = current.pathFromStart + getWeight(current.node, child)
      if (typeof distTo[child] !== 'number' || weight < distTo[child]) {
        distTo[child] = weight
        miniPQ.push(createNode(child, weight))
      }
    })
  }

  const max = Math.max(...distTo)

  return max === Infinity ? -1 : max
}
// @lc code=end