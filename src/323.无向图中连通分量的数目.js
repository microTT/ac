/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countComponents = function (n, edges) {
  function createUnionFind(nodeNums) {
    let count = Number(nodeNums)
    const parent = new Array(Number(nodeNums)).fill(null).map((_, i) => i)
    function connect(node1, node2) {
      const node1Parent = findParent(node1)
      const node2Parent = findParent(node2)
      if (node1Parent === node2Parent) {
        return
      }
      parent[node1Parent] = node2Parent
      count -= 1
    }

    function findParent(node) {
      if (parent[node] !== node) {
        parent[node] = findParent(parent[node])
      }
      return parent[node]
    }
    function hasConnect(node1, node2) {
      return findParent(node1) === findParent(node2)
    }

    return {
      connect,
      findParent,
      hasConnect,
      getCount: () => count,
    }
  }

  const uf = createUnionFind(n)
  edges.forEach(([node1, node2]) => uf.connect(node1, node2))
  return uf.getCount()
}
