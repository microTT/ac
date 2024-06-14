/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
  const memo = []

  function dp(index1, index2) {
    if (index2 >= word2.length) {
      return word1.length - index1
    } else if (index1 >= word1.length) {
      return word2.length - index2
    }

    if (typeof memo[index1]?.[index2] === 'number') {
      return memo[index1][index2]
    }

    let res = Infinity

    if (word1[index1] === word2[index2]) {
      res = Math.min(
        dp(index1 + 1, index2 + 1),
        dp(index1 + 1, index2) + 1,
        dp(index1, index2 + 1) + 1
      )
    } else {
      res = Math.min(
        dp(index1 + 1, index2 + 1) + 1,
        dp(index1 + 1, index2) + 1,
        dp(index1, index2 + 1) + 1
      )
    }

    memo[index1] ||= []
    memo[index1][index2] = res
    return res
  }

  return dp(0, 0)
}
// @lc code=end
