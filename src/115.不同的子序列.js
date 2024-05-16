/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = function (s, t) {
  let result = 0

  const memo = []

  function dp(str1, length1, str2, length2) {
    if (length2 === 0) {
      return 1
    } else if (length1 === 0) {
      return 0
    }
    if (typeof memo[length1]?.[length2] === 'number') {
      return memo[length1]?.[length2]
    }

    let currentResult = 0

    if (str1[length1 - 1] === str2[length2 - 1]) {
      currentResult =
        dp(str1, length1 - 1, str2, length2 - 1) +
        dp(str1, length1 - 1, str2, length2)
    } else {
      currentResult = dp(str1, length1 - 1, str2, length2)
    }

    memo[length1] ||= []
    memo[length1][length2] = currentResult
    return currentResult
  }

  result = dp(s, s.length, t, t.length)

  return result % (Math.pow(10, 9) + 7)
}
// @lc code=end
