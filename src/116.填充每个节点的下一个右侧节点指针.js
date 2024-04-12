const connect = function (root) {
  let traversedList = [root].filter(Boolean)

  while (traversedList.length) {
    traversedList.forEach(
      (node, index, list) => (node.next = list[index + 1] || null)
    )
    traversedList = traversedList.reduce(
      (list, node) => [...list, node.left, node.right].filter(Boolean),
      []
    )
  }
  return root
}

const connect2 = function (root) {
  let traversedList = [root].filter(Boolean)

  while (traversedList.length) {
    const currentLevelNodeLength = traversedList.length
    for (let i = 0; i < currentLevelNodeLength; i++) {
      traversedList[i].next =
        i + 1 >= currentLevelNodeLength ? null : traversedList[i + 1]
      traversedList = traversedList.concat(
        [traversedList[i].left, traversedList[i].right].filter(Boolean)
      )
    }
    traversedList = traversedList.slice(currentLevelNodeLength)
  }
  return root
}

const connect3 = function (root) {
  if (!root) {
    return root
  }

  function traverseAndPatch(nodes) {
    if (!nodes.length) {
      return
    }
    let nextNodes = []
    nodes.forEach((node, i, list) => {
      node.next = list[i + 1] || null
      nextNodes = nextNodes.concat([node.left, node.right].filter(Boolean))
    })

    traverseAndPatch(nextNodes)
  }

  traverseAndPatch([root])

  return root
}
