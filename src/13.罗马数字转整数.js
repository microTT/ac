/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const SPECIAL_MAP = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  }

  const CHART_MAP = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  if (SPECIAL_MAP[s]) {
    return SPECIAL_MAP[s]
  }

  let sum = 0
  for (let index = 0; index < s.length; index++) {
    const current = s[index]
    const next = s[index + 1]
    const comp = next ? `${current}${next}` : null
    if (comp && SPECIAL_MAP[comp]) {
      sum += SPECIAL_MAP[comp]
      index += 1
    } else {
      sum += CHART_MAP[current]
    }
  }

  return sum
}
// @lc code=end
