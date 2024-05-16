/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function (s) {
  const maxSubStringLength = Math.floor(s.length / 2)

  for (let length = 1; length < maxSubStringLength + 1; length++) {
    if (s.length % length !== 0) {
      continue
    }
    let corrent = true
    for (let index = 0; index < s.length - length; index++) {
      if (s[index] !== s[index + length]) {
        corrent = false
        break
      }
    }
    if (corrent) {
      return true
    }
  }
  return false
}
// @lc code=end
