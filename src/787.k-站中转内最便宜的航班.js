/*
 * @lc app=leetcode.cn id=787 lang=javascript
 *
 * [787] K 站中转内最便宜的航班
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
const findCheapestPrice = function (n, flights, src, dst, k) {
  const memo = []
  function dp(target, interval) {
    if (target === src && interval >= 0) {
      return 0
    }

    if (interval < 0) {
      return Math.pow(10, 7)
    }

    if (typeof memo[target]?.[interval] === 'number') {
      return memo[target]?.[interval]
    }

    const flightsToTarget = flights.filter(([_, to]) => to === target)

    const result = Math.min(
      ...flightsToTarget.map(
        (flight) => dp(flight[0], interval - 1) + flight[2]
      )
    )
    memo[target] ||= []
    memo[target][interval] = result
    return result
  }

  const result = dp(dst, k + 1)
  return result >= Math.pow(10, 7) ? -1 : result
}
// @lc code=end
