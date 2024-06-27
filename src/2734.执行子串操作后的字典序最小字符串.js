/*
 * @lc app=leetcode.cn id=2734 lang=javascript
 *
 * [2734] 执行子串操作后的字典序最小字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const smallestString = function (s) {
  if (!s.length) {
    return ''
  }
  let left = 0
  let right = 0

  function getPrevChar(character) {
    const code = character.charCodeAt(0)
    return String.fromCharCode(code - 1)
  }

  let result = ''
  while (right < s.length) {
    const current = s[right]
    if (current !== 'a') {
      right++
      result += getPrevChar(current)
      continue
    }
    if (right === left) {
      right++
      left++
      result += current
      continue
    }
    if (right > left) {
      result += s.substring(right)
      break
    }
  }
  if (right === left) {
    return s.substring(0, s.length - 1) + 'z'
  }
  return result
}
// @lc code=end

// console.log(smallestString('a'))
