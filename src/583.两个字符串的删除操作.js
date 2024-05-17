/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
  if (!word1 || !word2) {
    return 0
  }

  const memo = []
  function dp(length1, length2) {
    if (!length1 || !length2) {
      return length1 || length2
    }
    if (typeof memo[length1]?.[length2] === 'number') {
      return memo[length1]?.[length2]
    }

    let result = Infinity
    if (word1[length1 - 1] === word2[length2 - 1]) {
      result = Math.min(
        dp(length1 - 1, length2 - 1),
        dp(length1 - 1, length2) + 1,
        dp(length1, length2 - 1) + 1
      )
    } else {
      result = Math.min(
        dp(length1 - 1, length2) + 1,
        dp(length1, length2 - 1) + 1
      )
    }
    memo[length1] ||= []
    memo[length1][length2] = result

    return result
  }
  return dp(word1.length, word2.length)
}
// @lc code=end
