/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
const maxEnvelopes = function (envelopes) {
  if (!envelopes.length) {
    return 0
  }
  const sortedEnvelopes = envelopes.sort((v1, v2) => {
    if (v1[0] === v2[0]) {
      return v2[1] - v1[1]
    }
    return v1[0] - v2[0]
  })

  const height = sortedEnvelopes.map((item) => item[1])

  const envelopeHeap = []

  function findHeap(heap, value) {
    let left = 0
    let right = heap.length - 1
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (heap[mid] >= value) {
        right = mid - 1
      } else if (heap[mid] < value) {
        left = mid + 1
      }
    }
    return left
  }

  for (let index = 0; index < height.length; index++) {
    const element = height[index]
    const headIndex = findHeap(envelopeHeap, element)
    envelopeHeap[headIndex] = element
  }

  return envelopeHeap.length
}
// @lc code=end
