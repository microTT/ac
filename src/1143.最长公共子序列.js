/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
  if (!text1 || !text2) {
    return 0
  }

  const memo = []

  function dp(length1, length2) {
    if (!length1 || !length2) {
      return 0
    }

    if (typeof memo[length1]?.[length2] === 'number') {
      return memo[length1]?.[length2]
    }

    let result = 0
    if (text1[length1 - 1] === text2[length2 - 1]) {
      result = Math.max(
        dp(length1 - 1, length2 - 1) + 1,
        dp(length1 - 1, length2),
        dp(length1, length2 - 1)
      )
    } else {
      result = Math.max(dp(length1 - 1, length2), dp(length1, length2 - 1))
    }
    memo[length1] ||= []
    memo[length1][length2] = result
    return result
  }

  return dp(text1.length, text2.length)
}
// @lc code=end
