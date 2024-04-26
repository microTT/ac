/*
 * @lc app=leetcode.cn id=1755 lang=javascript
 *
 * [1755] 最接近目标值的子序列和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
const minAbsDifference = function (nums, goal) {
  let target = Infinity

  const sortedNums = nums.sort((v1, v2) => v1 - v2)

  const leftNums = sortedNums.slice(0, Math.floor(nums.length / 2))
  const rightNums = sortedNums.slice(Math.floor(nums.length / 2))

  let leftSumList = []
  let rightSumList = []

  function traverse(result, sum, choices) {
    result.push(sum)

    for (let i = 0; i < choices.length; i++) {
      traverse(result, sum + choices[i], choices.slice(i + 1))
    }

    return result
  }

  traverse(leftSumList, 0, leftNums)
  traverse(rightSumList, 0, rightNums)

  leftSumList = leftSumList.sort((v1, v2) => v1 - v2)
  rightSumList = rightSumList.sort((v1, v2) => v1 - v2)

  for (let index = 0; index < leftSumList.length; index++) {
    target = Math.min(target, Math.abs(leftSumList[index] - goal))
    if (target === 0) {
      return target
    }
  }

  for (let index = 0; index < rightSumList.length; index++) {
    target = Math.min(target, Math.abs(rightSumList[index] - goal))
    if (target === 0) {
      return target
    }
  }

  let left = 0
  let right = rightSumList.length - 1
  while (left <= leftSumList.length - 1 && right >= 0) {
    const sum = leftSumList[left] + rightSumList[right]
    target = Math.min(target, Math.abs(sum - goal))

    if (target === 0) {
      return 0
    }
    if (sum > goal) {
      right--
    } else {
      left++
    }
  }
  return target
}
// @lc code=end

console.log(
  minAbsDifference(
    [
      3530, -1549, 6835, -587, 3787, -1033, 4205, 1006, 5918, -2940, 6101, 3169,
      3930, -7006, -7889, -5758, -3246, -5098, -2489, -9144, -6617, -1703,
      -4898, 5721, -6758, 3078, -3859, -9902, -7079, 4014, -8334, 8009,
    ],
    842213514
  )
)
