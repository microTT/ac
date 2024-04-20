function sum(list) {
  return list.reduce((acc, val) => acc + val, 0)
}

/**
 * @param {number[]} dist
 * @param {number} speed
 * @param {number} hoursBefore
 * @return {number}
 */
const minSkips = function (dist, speed, hoursBefore) {
  const maxDist = speed * hoursBefore
  const distSum = sum(dist)
  if (distSum > maxDist) {
    return -1
  }

  const memo = []

  function traverse(skipCount, leftDistList) {
    if (!leftDistList.length) {
      return 0
    }

    if (memo?.[skipCount]?.[leftDistList.length]) {
      return memo?.[skipCount]?.[leftDistList.length]
    }

    if (skipCount === 0) {
      return sum(leftDistList.map((val) => Math.ceil(val / speed) * speed))
    }
    const current = leftDistList.at(-1)
    const next = leftDistList.slice(0, -1)
    const chooseBreak =
      Math.ceil((current + traverse(skipCount, next)) / speed) * speed

    if (skipCount) {
      const chooseSkip = current + traverse(skipCount - 1, next)
      const result = Math.min(chooseBreak, chooseSkip)
      memo[skipCount] = memo[skipCount] || []
      memo[skipCount][leftDistList.length] = result
      return result
    }
    memo[skipCount] = memo[skipCount] || []
    memo[skipCount][leftDistList.length] = chooseBreak
    return chooseBreak
  }

  for (let skipCount = 0; skipCount < dist.length; skipCount++) {
    const currentDist = traverse(skipCount, dist.slice(0, -1))
    if (currentDist + dist.at(-1) <= maxDist) {
      return skipCount
    }
  }

  return -1
}
