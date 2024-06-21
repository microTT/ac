/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = function (numCourses, prerequisites) {
  const childList = []
  for (let index = 0; index < prerequisites.length; index++) {
    const [start, end] = prerequisites[index]
    childList[start] ||= []
    childList[start].push(end)
  }

  const visited = []
  const orders = []

  function dfs(node, path) {
    if (path.includes(node)) {
      return false
    }

    if (visited[node]) {
      return true
    }

    visited[node] = true

    const childs = childList[node]

    const result = childs?.length
      ? childs.every((child) => dfs(child, [...path, node]))
      : true
    orders.push(node)

    return result
  }

  for (let index = 0; index < numCourses; index++) {
    if (visited[index]) {
      continue
    }

    if (!dfs(index, [])) {
      return []
    }
  }

  return orders
}
// @lc code=end

// console.log(findOrder(2, [[1, 0]]))
// console.log(findOrder(2, [[0, 1]]))
