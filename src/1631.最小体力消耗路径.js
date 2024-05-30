/*
 * @lc app=leetcode.cn id=1631 lang=javascript
 *
 * [1631] 最小体力消耗路径
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number}
 */
const minimumEffortPath = function (heights) {
  const rowLength = heights.length
  const colLength = heights[0]?.length

  function getCellIndex([rowIndex, colIndex]) {
    return rowIndex * colLength + colIndex
  }

  function getWeight([rowIndex1, colIndex1], [rowIndex2, colIndex2]) {
    const path =
      heights[rowIndex1]?.[colIndex1] - heights[rowIndex2]?.[colIndex2]
    return Math.abs(path)
  }

  function getCellChildren([rowIndex, colIndex]) {
    const dirs = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]
    return dirs
      .map(([rowOffset, colOffset]) => [
        rowIndex + rowOffset,
        colIndex + colOffset,
      ])
      .filter(
        ([row, col]) =>
          row >= 0 && row < rowLength && col >= 0 && col < colLength
      )
  }

  class PriorityQueue {
    constructor(compareFunction = (v1, v2) => v1 - v2) {
      this._compareFunction = compareFunction
      this._queue = [null]
    }

    insert(val) {
      this._queue.push(val)
      this._swim(this._queue.length - 1)
    }

    get() {
      return this._queue[1]
    }

    pop() {
      if (this._queue.length < 2) {
        return
      }
      this._swap(1, this._queue.length - 1)
      const target = this._queue.pop()
      this._sink(1)
      return target
    }

    getSize() {
      return this._queue.length - 1
    }

    _compare(index1, index2) {
      return this._compareFunction(this._queue[index1], this._queue[index2])
    }

    _getParentIndex(index) {
      return Math.floor(index / 2)
    }

    _getLeftIndex(index) {
      return index * 2
    }

    _getRightIndex(index) {
      return index * 2 + 1
    }

    _swim(index) {
      if (index === 1) {
        return
      }
      const parentIndex = this._getParentIndex(index)
      if (this._compare(index, parentIndex)) {
        this._swap(index, parentIndex)
        this._swim(parentIndex)
      }
    }

    _sink(index) {
      const leftIndex = this._getLeftIndex(index)
      if (leftIndex >= this._queue.length) {
        return
      }

      const rightIndex = this._getRightIndex(index)
      const swapIndex =
        rightIndex >= this._queue.length || this._compare(leftIndex, rightIndex)
          ? leftIndex
          : rightIndex

      if (this._compare(swapIndex, index)) {
        this._swap(index, swapIndex)
        this._sink(swapIndex)
      }
    }

    _swap(index1, index2) {
      const tmp = this._queue[index1]
      this._queue[index1] = this._queue[index2]
      this._queue[index2] = tmp
    }
  }

  const miniPQ = new PriorityQueue(
    (node1, node2) => node1.pathFromStart < node2.pathFromStart
  )

  function createNode(rowIndex, colIndex, pathFromStart) {
    return { rowIndex, colIndex, pathFromStart }
  }

  miniPQ.insert(createNode(0, 0, 0))

  const distTo = [0]
  while (miniPQ.getSize()) {
    const current = miniPQ.pop()
    const currentDist =
      distTo[getCellIndex([current.rowIndex, current.colIndex])]

    if (currentDist < current.pathFromStart) {
      continue
    }

    const children = getCellChildren([current.rowIndex, current.colIndex])

    children.forEach((child) => {
      const weight = Math.max(
        currentDist,
        getWeight(child, [current.rowIndex, current.colIndex])
      )

      if (
        typeof distTo[getCellIndex(child)] !== 'number' ||
        weight < distTo[getCellIndex(child)]
      ) {
        distTo[getCellIndex(child)] = weight
        miniPQ.insert(createNode(child[0], child[1], weight))
      }
    })
  }
  return distTo[getCellIndex([rowLength - 1, colLength - 1])]
}

// @lc code=end
