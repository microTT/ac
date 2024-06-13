/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = function (s) {
  const charCount = {}

  let result = []
  for (let index = 0; index < s.length; index++) {
    const char = s[index]
    if (!charCount[char]) {
      result[index] = char
      charCount[char] = {
        count: 1,
        start: index,
        end: index,
      }
    } else {
      charCount[char].count += 1
      charCount[char].end = index
      result[index] = result
        .slice(charCount[char].start, index)
        .concat(char)
        .join('')
      for (
        let mergeIndex = charCount[char].start;
        mergeIndex < index;
        mergeIndex++
      ) {
        result[mergeIndex] = ''
      }
    }
  }
  return result.filter(Boolean).map((s) => s.length)
}
// @lc code=end
