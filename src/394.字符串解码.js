const decodeString = function (s) {
  const levelMap = { '-1': { count: 0, str: [] } }

  let level = -1
  let index = 0
  while (index < s.length) {
    if (/^\d/.test(s[index])) {
      level += 1
      const match = s.slice(index).match(/^\d+/)
      const current = match[0]
      levelMap[level] = levelMap[level] || {}
      levelMap[level].str = []
      levelMap[level].count = Number(current)
      index += current.length + 1
    } else if (/^[a-zA-Z]/.test(s[index])) {
      const match = s.slice(index).match(/^[a-zA-Z]+/)
      const current = match[0]
      levelMap[level].str.push(current)
      index += current.length
    } else if (s[index] === ']') {
      const repeatStr = levelMap[level].str.join('')
      const repeatCount = levelMap[level].count
      const current = repeatStr.repeat(repeatCount)
      levelMap[level] = {}
      level -= 1
      levelMap[level].str.push(current)
      index += 1
    }
  }

  return levelMap[-1].str.join('')
}

// console.log(decodeString('3[a]2[bc]'))
// console.log(decodeString('3[a2[c]]2[bc]'))
console.log(
  decodeString('3[2[c]a4[b]]'),
  'ccabbbbccabbbbccabbbb',
  'ccabbbbabbbbabbbb',
  'ccabbbbccabbbbccabbbb'
)
// console.log(
//   decodeString('3[z]2[2[y]pq4[2[jk]e1[f]]]ef'),
//   'zzzyypqjkjkefefefefpqjkjkefefefefef',
//   'zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef'
// )
