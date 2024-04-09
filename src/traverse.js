function TreeNode(value, left = null, right = null) {
  return {
    value,
    left,
    right,
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
  return new TreeNode(rootValue, ...childs)
}

const tree = transformAdjacencyListToTreeNode(0, [
  [0, 1, 2],
  [1, 3, 4],
  [2, 5, 6],
  [3, null, 7],
  [7, null, 8],
  [5, 9, 10],
])

console.log(tree)

function traverseFront(node) {
  if (!node) {
    return []
  }
  const currentValue = node.value
  const leftValues = traverseFront(node.left)
  const rightValues = traverseFront(node.right)
  return [currentValue, ...leftValues, ...rightValues]
}

function traverseMiddle(node) {
  if (!node) {
    return []
  }
  const leftValues = traverseMiddle(node.left)
  const currentValue = node.value
  const rightValues = traverseMiddle(node.right)
  return [...leftValues, currentValue, ...rightValues]
}

function traverseBack(node) {
  if (!node) {
    return []
  }
  const leftValues = traverseBack(node.left)
  const rightValues = traverseBack(node.right)
  const currentValue = node.value
  return [...leftValues, ...rightValues, currentValue]
}

function traverseLevel(node) {
  if (!node) {
    return []
  }

  function traver(nodeList) {
    if (!nodeList.length) {
      return []
    }
    const currentValueList = nodeList.map((v) => v.value)
    const nextLevelList = nodeList
      .map((v) => [v.left, v.right])
      .reduce((list, childs) => [...list, ...childs], [])
      .filter(Boolean)

    return [...currentValueList, ...traver(nextLevelList)]
  }

  return traver([node])
}

function traverseLevelBack(node) {
  if (!node) {
    return []
  }

  function traverse(nodeList) {
    if (!nodeList.length) {
      return []
    }
    const currentValueList = nodeList.map((v) => v.value)
    const nextLevelList = nodeList
      .map((v) => [v.left, v.right])
      .reduce((list, childs) => [...list, ...childs], [])
      .filter(Boolean)

    return [...traverse(nextLevelList), ...currentValueList]
  }

  return traverse([node])
}

// console.log(traverseFront(tree))
// console.log(traverseMiddle(tree))
// console.log(traverseBack(tree))
// console.log(traverseLevel(tree))
// console.log(traverseLevelBack(tree))

function traverseFrontIterator(node) {
  if (!node) {
    return []
  }
  let iterator = [node]
  const values = []
  while (iterator.length) {
    const current = iterator.shift()
    values.push(current.value)
    iterator = [current.left, current.right, ...iterator].filter(Boolean)
  }
  return values
}

function traverseMiddleIterator(node) {
  if (!node) {
    return []
  }
  let iterator = [node]
  let values = [node.value]
  while (iterator.length) {
    const current = iterator.shift()
    const index = values.findIndex((v) => v === current.value)
    values = [
      ...values.slice(0, index),
      current.left?.value,
      current.value,
      current.right?.value,
      ...values.slice(index + 1),
    ].filter((v) => v !== undefined)
    iterator = [current.left, current.right, ...iterator].filter(Boolean)
  }
  return values
}

function traverseBackIterator(node) {
  if (!node) {
    return []
  }
  let iterator = [node]
  const values = []
  while (iterator.length) {
    const current = iterator.shift()
    values.unshift(current.value)
    iterator = [current.right, current.left, ...iterator].filter(Boolean)
  }
  return values
}

function traverseLevelIterator(node) {
  if (!node) {
    return []
  }
  let iterator = [node]
  const values = []
  while (iterator.length) {
    const current = iterator.shift()
    values.push(current.value)
    iterator = iterator.concat([current.left, current.right]).filter(Boolean)
  }
  return values
}

// console.log(traverseFrontIterator(tree))
// console.log(traverseMiddleIterator(tree))
// console.log(traverseBackIterator(tree))
// console.log(traverseLevelIterator(tree))

const front = [0, 1, 3, 7, 8, 4, 2, 5, 9, 10, 6]
const middle = [3, 7, 8, 1, 4, 0, 9, 5, 10, 2, 6]
const back = [8, 7, 3, 4, 1, 9, 10, 5, 6, 2, 0]

function revertTree(front, middle) {
  if (!front.length) {
    return null
  }
  const rootVaue = front[0]
  const rootIndex = middle.findIndex((v) => v === rootVaue)
  const left = middle.slice(0, rootIndex)
  const right = middle.slice(rootIndex + 1)
  const frontOther = front.slice(1)
  return new TreeNode(
    rootVaue,
    revertTree(frontOther.slice(0, left.length), left),
    revertTree(frontOther.slice(left.length), right)
  )
}

console.log(revertTree(front, middle))
