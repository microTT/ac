/*
 * @lc app=leetcode.cn id=266 lang=javascript
 *
 * [266] 回文排列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const canPermutePalindrome = function (s) {
  const countMap = {}
  let evenCount = 0
  for (let index = 0; index < s.length; index++) {
    const current = s[index]
    countMap[current] ||= 0
    countMap[current]++
    if (countMap[current] % 2 == 1) {
      evenCount++
    } else {
      evenCount--
    }
  }

  if (evenCount > 1) {
    return false
  }
  return true
}
// @lc code=end
