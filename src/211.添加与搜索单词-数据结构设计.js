/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start

const WordDictionary = function () {
  this.root = this._createNode()
}

WordDictionary.prototype._createNode = function () {
  return {
    val: null,
    children: {},
  }
}

WordDictionary.prototype._insert = function (node, subWord) {
  if (!subWord) {
    node.val = true
    return
  }
  const current = subWord[0]
  node.children[current] ||= this._createNode()
  this._insert(node.children[current], subWord.slice(1))
}

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  this._insert(this.root, word)
}

WordDictionary.prototype._hasNodeWithPartten = function (node, partten) {
  if (!partten) {
    return !!(node && node.val)
  }
  if (!node) {
    return false
  }

  const current = partten[0]

  const children = current === '.' ? Object.keys(node.children) : [current]
  return children.some((character) =>
    this._hasNodeWithPartten(node.children[character], partten.slice(1))
  )
}

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this._hasNodeWithPartten(this.root, word)
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
