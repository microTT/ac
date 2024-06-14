/*
 * @lc app=leetcode.cn id=407 lang=javascript
 *
 * [407] 接雨水 II
 */

// @lc code=start
/**
 * @param {number[][]} heightMap
 * @return {number}
 */
const trapRainWater = function (heightMap) {
  const rowLength = heightMap.length
  const colLength = heightMap[0].length

  class PriorityQueue {
    constructor(compareFunction = (v1, v2) => v1 > v2) {
      this.compareFunction = compareFunction
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
      return this.compareFunction(this.storage[index1], this.storage[index2])
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

    // 上浮
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

    //  下沉
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

  //  小顶堆
  const pq = new PriorityQueue((v1, v2) => v1.height < v2.height)

  let size = 0

  const waterHeight = []
  //  添加围墙
  for (let colIndex = 0; colIndex < colLength; colIndex++) {
    waterHeight[0] ||= []
    waterHeight[0][colIndex] = {
      rowIndex: 0,
      colIndex,
      height: heightMap[0][colIndex],
    }
    pq.insert(waterHeight[0][colIndex])
    size++

    waterHeight[rowLength - 1] ||= []
    waterHeight[rowLength - 1][colIndex] = {
      rowIndex: rowLength - 1,
      colIndex,
      height: heightMap[rowLength - 1][colIndex],
    }
    pq.insert(waterHeight[rowLength - 1][colIndex])
    size++
  }
  for (let rowIndex = 1; rowIndex < rowLength - 1; rowIndex++) {
    waterHeight[rowIndex] ||= []
    waterHeight[rowIndex][0] = {
      rowIndex,
      colIndex: 0,
      height: heightMap[rowIndex][0],
    }
    pq.insert(waterHeight[rowIndex][0])
    size++

    waterHeight[rowIndex] ||= []
    waterHeight[rowIndex][colLength - 1] = {
      rowIndex,
      colIndex: colLength - 1,
      height: heightMap[rowIndex][colLength - 1],
    }
    pq.insert(waterHeight[rowIndex][colLength - 1])
    size++
  }

  function getUNConfirmNeigbor(cell) {
    const { rowIndex, colIndex, height } = cell
    return [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]
      .map(([rowOffset, colOffset]) => [
        rowIndex + rowOffset,
        colIndex + colOffset,
      ])
      .filter(
        ([nearRowIndex, nearColIndex]) =>
          nearRowIndex >= 0 &&
          nearRowIndex < rowLength &&
          nearColIndex >= 0 &&
          nearColIndex < colLength
      )
      .filter(
        ([nearRowIndex, nearColIndex]) =>
          !waterHeight[nearRowIndex][nearColIndex]
      )
  }

  let area = 0

  function confirmCell(minWaterCell) {
    if (size >= rowLength * colLength) {
      return
    }
    const nears = getUNConfirmNeigbor(minWaterCell)

    nears.forEach(([rowIndex, colIndex]) => {
      const currentHeight = heightMap[rowIndex][colIndex]
      waterHeight[rowIndex][colIndex] = {
        rowIndex,
        colIndex,
        height:
          minWaterCell.height > currentHeight
            ? minWaterCell.height
            : currentHeight,
      }
      area += waterHeight[rowIndex][colIndex].height - currentHeight
      pq.insert(waterHeight[rowIndex][colIndex])
      size++
    })
    confirmCell(pq.pop())
  }

  confirmCell(pq.pop())

  return area
}
// @lc code=end

// console.log(
//   trapRainWater([
//     [1, 4, 3, 1, 3, 2],
//     [3, 2, 1, 3, 2, 4],
//     [2, 3, 3, 2, 3, 1],
//   ]),
//   4
// )

// console.log(
//   trapRainWater([
//     [12, 13, 1, 12],
//     [13, 4, 13, 12],
//     [13, 8, 10, 12],
//     [12, 13, 12, 12],
//     [13, 13, 13, 13],
//   ]),
//   14
// )
