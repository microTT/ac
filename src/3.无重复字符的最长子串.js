/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const length = s.length
  if (length <= 1) {
    return length
  }

  let maxLength = 0
  let left = 0
  let right = 0

  const charCount = {}

  while (right < length) {
    if (charCount[s[right]]) {
      charCount[s[left]] -= 1
      left++
    } else {
      charCount[s[right]] = 1
      maxLength = Math.max(maxLength, right + 1 - left)
      right++
    }
  }
  return maxLength
}
// @lc code=end


