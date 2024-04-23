/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let result = []

  const sortedNums = nums
    .map((val, index) => ({
      val,
      index,
    }))
    .sort((v1, v2) => v1.val - v2.val)

  let leftIndex = 0
  let rightIndex = sortedNums.length - 1

  while (leftIndex < rightIndex) {
    const otherNum = target - sortedNums[leftIndex].val
    while (otherNum < sortedNums[rightIndex].val) {
      rightIndex--
    }
    if (otherNum === sortedNums[rightIndex].val) {
      result = [sortedNums[leftIndex].index, sortedNums[rightIndex].index]
      break
    }
    leftIndex++
  }

  return result
}
// @lc code=end

// console.log(twoSum([3, 2, 4], 6))
