/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
  const memo = []

  function dp(string, length) {
    if (length < 0) {
      return 0
    }
    if (length === 0) {
      return 1
    }
    if (typeof memo[length] === 'number') {
      return memo[length]
    }

    const currentResult = wordDict
      .filter((word) => string.slice(length - word.length, length) === word)
      .map((word) => dp(string, length - word.length))
      .reduce((acc, count) => acc + count, 0)

    memo[length] = currentResult || 0
    return currentResult
  }

  return !!dp(s, s.length)
}
// @lc code=end
