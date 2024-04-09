function TreeNode(value, children = []) {
  return {
    value,
    children,
  }
}

function transformAdjacencyListToTreeNode(rootValue, adjacencyList) {
  if (rootValue === undefined || rootValue === null) {
    return null
  }
  const current = adjacencyList.find(([value]) => rootValue === value)
  const childs =
    current
      ?.slice(1)
      .map((value) => transformAdjacencyListToTreeNode(value, adjacencyList)) ||
    []
  return new TreeNode(rootValue, childs)
}

const tree = transformAdjacencyListToTreeNode(0, [
  [0, 1, 2, 3],
  [1, 4],
  [2, 5, 6],
  [3, null, 7],
  [7, null, 8],
  [5, 9, 10],
])

// console.log(tree)

function traverseFront(node) {
  if (!node) {
    return []
  }

  const value = node.value
  const childValues = node.children
    .map((n) => traverseFront(n))
    .reduce((acc, list) => [...acc, ...list], [])
  return [value, ...childValues]
}

// console.log(traverseFront(tree))

function traversePath(node) {
  if (!node) {
    return []
  }

  const path = node.children
    .filter(Boolean)
    .map((v) => `${node.value}-${v.value}`)
  const childValues = node.children
    .map((n) => traversePath(n))
    .reduce((acc, list) => [...acc, ...list], [])
  return [...path, ...childValues]
}

console.log(traversePath(tree))
