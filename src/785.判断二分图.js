/*
 * @lc app=leetcode.cn id=785 lang=javascript
 *
 * [785] 判断二分图
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite = function (graph) {
  if (!graph.length) {
    return true
  }

  let canDivide = true
  const colors = []
  const visited = []

  function traverse(nodeIndex) {
    const queue = [nodeIndex]
    let color = false
    while (queue.length) {
      color = !color
      const levelLength = queue.length
      for (let index = 0; index < levelLength; index++) {
        const current = queue.shift()
        if (visited[current] && colors[current] !== color) {
          canDivide = false
          return
        }
        if (visited[current]) {
          continue
        }
        visited[current] = true
        colors[current] = color
        queue.push(...graph[current])
      }
    }
  }
  for (let nodeIndex = 0; nodeIndex < graph.length; nodeIndex++) {
    if (visited[nodeIndex]) {
      continue
    }
    traverse(nodeIndex)
  }

  return canDivide
}
