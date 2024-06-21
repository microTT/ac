/*
 * @lc app=leetcode.cn id=261 lang=javascript
 *
 * [261] 以图判树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
const validTree = function (n, edges) {
  class UnionFind {
    constructor(nodeLength) {
      this.size = nodeLength
      this.parent = new Array(nodeLength).fill(null).map((_, i) => i)
    }

    connect(node1, node2) {
      if (this.hasConnect(node1, node2)) {
        return
      }
      const parent1 = this.findParent(this.parent[node1])
      const parent2 = this.findParent(this.parent[node2])
      this.parent[parent1] = this.parent[parent2]
      this.size -= 1
    }

    getSize() {
      return this.size
    }

    hasConnect(node1, node2) {
      const parent1 = this.findParent(node1)
      const parent2 = this.findParent(node2)
      return parent1 === parent2
    }

    findParent(node) {
      if (this.parent[node] !== node) {
        this.parent[node] = this.findParent(this.parent[node])
      }
      return this.parent[node]
    }
  }

  const uf = new UnionFind(n)

  for (let index = 0; index < edges.length; index++) {
    const [start, end] = edges[index]
    if (uf.hasConnect(start, end)) {
      return false
    }
    uf.connect(start, end)
  }

  return uf.getSize() === 1
}
// @lc code=end

// console.log(
//   validTree(5, [
//     [0, 1],
//     [0, 2],
//     [0, 3],
//     [1, 4],
//   ])
// )

// console.log(
//   validTree(5, [
//     [0, 1],
//     [0, 4],
//     [1, 4],
//     [2, 3],
//   ])
// )

// console.log(
//   validTree(5, [
//     [0, 1],
//     [2, 1],
//     [2, 0],
//     [2, 4],
//   ])
// )
