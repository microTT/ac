/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function (citations) {
  if (!citations.length) {
    return 0
  }
  const sortedCitations = citations.sort((v1, v2) => v2 - v1)

  let hMax = 0

  for (let index = 0; index < sortedCitations.length; index++) {
    const current = sortedCitations[index]
    if (current >= index + 1) {
      hMax = index + 1
    } else {
      break
    }
  }
  return hMax
}
// @lc code=end
