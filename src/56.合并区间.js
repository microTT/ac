/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  const sortedIntervals = intervals.sort((v1, v2) => v1[0] - v2[0])

  const result = []

  for (let index = 0; index < sortedIntervals.length; index++) {
    const currentIntervel = sortedIntervals[index]

    if (!result.length) {
      result.push(currentIntervel)
      continue
    }
    const [start, end] = result.at(-1)

    if (currentIntervel[0] <= end) {
      result.pop()
      result.push([
        Math.min(start, currentIntervel[0]),
        Math.max(end, currentIntervel[1]),
      ])
    } else {
      result.push(currentIntervel)
    }
  }
  return result
}
// @lc code=end
