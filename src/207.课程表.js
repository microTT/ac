/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
  const childs = []
  for (let index = 0; index < prerequisites.length; index++) {
    const [start, end] = prerequisites[index]
    childs[start] ||= []
    childs[start].push(end)
  }

  const visited = []

  function dfs(node, nodePath) {
    if (nodePath.includes(node)) {
      return false
    }

    if (visited[node]) {
      return true
    }

    visited[node] = true

    const currentChilds = childs[node]
    if (!currentChilds?.length) {
      return true
    }

    return currentChilds.every((child) => dfs(child, [...nodePath, node]))
  }

  for (let index = 0; index < numCourses; index++) {
    if (visited[index]) {
      continue
    }
    if (!dfs(index, [])) {
      return false
    }
  }
  return true
}
// @lc code=end

// console.log(
//   canFinish(5, [
//     [1, 4],
//     [2, 4],
//     [3, 1],
//     [3, 2],
//   ])
// )

// console.log(
//   canFinish(3, [
//     [0, 1],
//     [0, 2],
//     [1, 2],
//   ])
// )
