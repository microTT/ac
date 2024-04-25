/*
 * @lc app=leetcode.cn id=2810 lang=javascript
 *
 * [2810] 故障键盘
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
const finalString = function (s) {
  const list = []
  let traverse = false
  s.split('').forEach((char) => {
    if (char === 'i') {
      traverse = !traverse
      return
    }
    if (traverse) {
      list.unshift(char)
    } else {
      list.push(char)
    }
  })

  if (traverse) {
    return list.reverse().join('')
  }

  return list.join('')
}
// @lc code=end
