/*
 * @lc app=leetcode.cn id=1652 lang=javascript
 *
 * [1652] 拆炸弹
 */

// @lc code=start
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function (code, k) {
  let decrptedCode = []
  function getSum(list, start, end) {
    let sum = 0
    for (let index = start; index < end; index++) {
      sum += list[(index + list.length) % list.length]
    }
    return sum
  }

  for (let index = 0; index < code.length; index++) {
    if (k === 0) {
      decrptedCode[index] = 0
      continue
    }
    if (k > 0) {
      decrptedCode[index] = getSum(code, index + 1, index + 1 + k)
    } else {
      decrptedCode[index] = getSum(code, index + k, index)
    }
  }
  return decrptedCode
}
// @lc code=end
