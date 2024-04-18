/**
 * @param {number[]} changed
 * @return {number[]}
 */
const findOriginalArray = function (changed) {
  if (changed.length % 2 !== 0) {
    return []
  }

  const backup = [...changed.sort((v1, v2) => Number(v1) - Number(v2))]

  const count = {}
  backup.forEach((v) => (count[v] = (count[v] || 0) + 1))

  const original = []
  for (let i = 0; i < backup.length; i++) {
    const current = backup[i]
    if (!count[current]) {
      continue
    }
    if (!count[current * 2]) {
      return []
    }
    count[current]--
    count[current * 2]--
    original.push(current)
  }
  return original
}
