/**
 * @param {string} pressedKeys
 * @return {number}
 */
const KEY_MAP = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'j'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
}

const BASE_COUNT = [1, 1, 2, 4]

function countSameCharacter(str, target) {
  let count = 0
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== target) {
      return count
    }
    count += 1
  }
  return count
}

const countTexts = function (pressedKeys) {
  const dp = [1]
  for (let i = 1; i < pressedKeys.length; i++) {
    const current = pressedKeys[i]
    const currentKeys = KEY_MAP[current]
    const sameCount = countSameCharacter(
      pressedKeys.slice(Math.max(i - currentKeys.length, 0), i),
      current
    )
    if (sameCount === 0) {
      dp[i] = dp[i - 1]
    } else {
      const indexs = new Array(sameCount)
        .fill(null)
        .map((_, index) => i - index - 1)

      const prev = indexs.map((index) => dp[index] || 1)

      dp[i] = prev.reduce((sum, val) => sum + val, 0)
    }
  }
  return dp[pressedKeys.length - 1] % (Math.pow(10, 9) + 7)
}

console.log(countTexts('22233'))

// console.log(countTexts('2222'))
// console.log(countTexts('22222'))
// console.log(countTexts('222222'))
