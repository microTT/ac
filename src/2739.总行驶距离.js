/*
 * @lc app=leetcode.cn id=2739 lang=javascript
 *
 * [2739] 总行驶距离
 */

// @lc code=start
/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
const distanceTraveled = function (mainTank, additionalTank) {
  if (mainTank < 5 || additionalTank <= 0) {
    return mainTank * 10
  }

  let sumTank = 0
  while (mainTank > 0 && additionalTank > 0) {
    const currentUsed = mainTank >= 5 ? 5 : mainTank
    sumTank += currentUsed
    mainTank -= currentUsed
    if (currentUsed === 5) {
      additionalTank -= 1
      mainTank += 1
    }
  }
  if (mainTank > 0) {
    sumTank += mainTank
  }

  return sumTank * 10
}
// @lc code=end
