/**
 * @param {number[]} arr
 * @return {number}
 */
const maxChunksToSorted = function (arr) {
  if (!arr.length) {
    return 1
  }
  let chunks = 0
  let index = 0
  while (index < arr.length) {
    const lastMin = findLastMin(arr.slice(index))
    chunks += 1
    index = index + lastMin + 1
  }

  return chunks
}

function findLastMin(nums) {
  let lastMin = 0
  const current = nums[0]
  let currentMax = current
  let max = current

  nums.forEach((num, index, list) => {
    if (num < currentMax) {
      lastMin = index
      currentMax = max
    }
    max = Math.max(max, num)
  })
  return lastMin
}

// console.log(maxChunksToSorted([1, 1, 0, 0, 1]))
// console.log(maxChunksToSorted([0, 3, 0, 3, 2]))
// console.log(maxChunksToSorted([5, 1, 1, 8, 1, 6, 5, 9, 7, 8]))
// console.log(maxChunksToSorted([5, 1, 1, 8, 1, 7, 6, 9, 7, 8]))
