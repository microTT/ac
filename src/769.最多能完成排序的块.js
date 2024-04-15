/**
 * @param {number[]} arr
 * @return {number}
 */
const maxChunksToSorted = function (arr) {
  if (!arr.length) {
    return 1
  }

  let allChunks = []
  let index = 0
  while (index < arr.length) {
    const chunks = findChunks(arr.slice(index))
    allChunks = allChunks.concat(chunks)
    index = index + chunks.reduce((length, list) => length + list.length, 0)
  }
  return allChunks.length
}

function findChunks(list) {
  let chunkMax = list[0]
  let max = list[0]
  let index = 0
  list.forEach((num, i) => {
    max = Math.max(max, num)
    if (num < chunkMax) {
      index = i
      chunkMax = max
    }
  })
  const chunk = list.slice(0, index + 1)
  return [chunk]
}
