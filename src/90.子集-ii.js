/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
  const result = []

  const sortedNums = nums.sort((v1, v2) => v1 - v2)
  function traverse(tracker, choices) {
    result.push(tracker)
    for (let i = 0; i < choices.length; i++) {
      if (choices[i] === choices[i - 1]) {
        continue
      }
      traverse([...tracker, choices[i]], choices.slice(i + 1))
    }
  }

  traverse([], sortedNums)
  return result
}
// @lc code=end

// console.log(subsetsWithDup([4, 4, 4, 1, 4]), [
//   [],
//   [1],
//   [1, 4],
//   [1, 4, 4],
//   [1, 4, 4, 4],
//   [1, 4, 4, 4, 4],
//   [4],
//   [4, 4],
//   [4, 4, 4],
//   [4, 4, 4, 4],
// ])
