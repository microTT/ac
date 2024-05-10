/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  function findPalindrome(string, left, right) {
    while (
      left >= 0 &&
      right < string.length &&
      string[left] === string[right]
    ) {
      left--
      right++
    }
    return string.slice(left + 1, right)
  }

  let subStr = ''
  for (let index = 0; index < s.length; index++) {
    const evenStr = findPalindrome(s, index, index)
    const oddStr = findPalindrome(s, index, index + 1)
    const maxStr = evenStr.length > oddStr.length ? evenStr : oddStr
    subStr = subStr.length > maxStr.length ? subStr : maxStr
  }
  return subStr
}
// @lc code=end
