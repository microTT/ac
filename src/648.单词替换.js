/*
 * @lc app=leetcode.cn id=648 lang=javascript
 *
 * [648] 单词替换
 */

// @lc code=start
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = function (dictionary, sentence) {
  class Trie {
    constructor() {
      this.root = this._createNode()
      this.size = 0
    }

    _createNode() {
      return {
        val: null,
        children: {},
      }
    }

    _insert(node, subWord) {
      if (!subWord) {
        node.val = true
        return
      }
      const current = subWord[0]
      node.children[current] ||= this._createNode()
      this._insert(node.children[current], subWord.slice(1))
    }

    _findNode(node, subWord) {
      if (!subWord) {
        return node
      }
      if (!node) {
        return null
      }

      const current = subWord[0]
      return this._findNode(node.children[current], subWord.slice(1))
    }

    put(word) {
      this._insert(this.root, word)
      this.size += 1
    }

    has(word) {
      const node = this._findNode(this.root, word)
      return !!(node && node.val)
    }

    getShortestPrefix(word) {
      let node = this.root
      let prefixLen = 0
      for (let index = 0; index < word.length; index++) {
        const current = word[index]
        const next = node.children[current]
        if (!next) {
          node = null
          break
        }
        if (next && next.val) {
          node = next
          prefixLen = index + 1
          break
        }
        node = next
      }

      if (prefixLen) {
        return word.slice(0, prefixLen)
      }
      return ''
    }
  }

  const trie = new Trie()
  dictionary.forEach((prefix) => trie.put(prefix))

  return sentence
    .split(/\s+/)
    .map((word) => {
      const wordRoot = trie.getShortestPrefix(word)
      return wordRoot || word
    })
    .join(' ')
}
// @lc code=end
