/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = function (ratings) {
  if (!ratings.length) {
    return 0
  }

  const candyListLeft = new Array(ratings.length).fill(1)
  const candyListRight = new Array(ratings.length).fill(1)
  for (let index = 1; index < ratings.length; index++) {
    const current = ratings[index]
    if (current > ratings[index - 1]) {
      candyListLeft[index] = candyListLeft[index - 1] + 1
    }
  }
  for (let index = ratings.length - 2; index >= 0; index--) {
    const current = ratings[index]
    if (current > ratings[index + 1]) {
      candyListRight[index] = candyListRight[index + 1] + 1
    }
  }
  return candyListLeft.reduce(
    (acc, _, index) =>
      acc + Math.max(candyListLeft[index], candyListRight[index]),
    0
  )
}
// @lc code=end
