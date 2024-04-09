function findAllIndex(str, target, pos = 0) {
  if (!str || !target) {
    return []
  }
  const start = str.indexOf(target)
  if (start < 0) {
    return []
  }
  return [start + pos].concat(
    findAllIndex(str.slice(start + 1), target, pos + start + 1)
  )
}

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function (s, words) {
  if (!s.length) {
    return []
  }
  if (!words?.length || !words[0]) {
    return []
  }
  const subStringLenth = words.length * words[0].length
  if (subStringLenth > s.length) {
    return []
  }

  let result = []

  function trave(str, trackString, wordList) {
    if (trackString && !findAllIndex(str, trackString).length) {
      return
    }

    if (!wordList?.length) {
      const allIndex = findAllIndex(str, trackString)
      if (allIndex.length) {
        result = result.concat(allIndex)
      }
      return
    }

    wordList.forEach((word, currentIndex) => {
      const current = trackString + word
      trave(
        str,
        current,
        wordList.filter((_, filterIndex) => filterIndex !== currentIndex)
      )
    })
  }

  trave(s, '', words)
  return result.filter((v, index) => result.indexOf(v) === index)
}

console.log(findSubstring('aaaaaaaaaaaaaa', ['aa', 'aa']))
