/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubarraySumCircular = function (nums) {
  const dpLineMax = [nums[0]]
  const dpLineMin = [nums[0]]
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    if (i !== 0) {
      dpLineMax[i] = Math.max(dpLineMax[i - 1] + nums[i], nums[i])
      dpLineMin[i] = Math.min(dpLineMin[i - 1] + nums[i], nums[i])
    }
    sum += nums[i]
  }

  const circelMAx = sum - Math.min(...dpLineMin)
  if (circelMAx === 0) {
    return Math.max(...dpLineMax)
  }
  return Math.max(...dpLineMax, circelMAx)
}

// console.log(maxSubarraySumCircular([1, -2, 3, -2]))
// console.log(maxSubarraySumCircular([5, -3, 5]))
// console.log(maxSubarraySumCircular([-3, -2, -3]))
// console.log(maxSubarraySumCircular([0, 5, 8, -9, 9, -7, 3, -2]))
