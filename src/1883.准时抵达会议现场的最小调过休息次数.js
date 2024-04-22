/**
 * @param {number[]} dist
 * @param {number} speed
 * @param {number} hoursBefore
 * @return {number}
 */
const minSkips = function (dist, speed, hoursBefore) {
  const distSum = dist.reduce((acc, val) => acc + val, 0)
  const enableMaxDist = speed * hoursBefore
  if (distSum > enableMaxDist) {
    return -1
  }

  const memo = {}

  function traverse(leftHours, choice, skipBreakCount) {
    if (!choice.length) {
      return skipBreakCount
    }

    if (memo[dist.length - choice.length]) {
      return memo[dist.length - choice.length]
    }

    let minCount = Infinity

    let sum = 0
    for (let i = 0; i < choice.length; i++) {
      sum += choice[i]
      const currentSkipCount = i
      const usedTime =
        i === choice.length - 1 ? sum / speed : Math.ceil(sum / speed)
      if (leftHours < usedTime) {
        break
      }
      minCount = Math.min(
        minCount,
        traverse(
          leftHours - usedTime,
          choice.slice(i + 1),
          skipBreakCount + currentSkipCount
        )
      )
      if (sum % speed === 0) {
        break
      }
    }
    memo[dist.length - choice.length] = minCount
    return minCount
  }

  return traverse(hoursBefore, dist, 0)
}

// console.log(minSkips([1, 1, 1, 1], 4, 1.5))
console.log(minSkips([1, 3, 2], 4, 2))
// console.log(
//   minSkips(
//     [
//       40, 31, 8, 31, 73, 11, 11, 94, 63, 9, 98, 69, 99, 17, 17, 85, 61, 71, 22,
//       34, 68, 78, 55, 28, 70, 97, 94, 89, 26, 92, 40, 52, 86, 84, 48, 57, 67,
//       58, 16, 32, 29, 9, 44, 3, 76, 71, 30, 76, 29, 1, 10, 91, 81, 8, 30, 9, 5,
//       43, 10, 66, 31, 36, 86, 63, 28, 70, 17, 93, 74, 74, 61, 32, 61,
//     ],
//     55,
//     96
//   )
// )
