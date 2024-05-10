/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

const Trie = function () {
  this.node = this._createNode()
  this.size = 0
}

Trie.CHARACTER_SIZE = 26

Trie.prototype._createNode = function () {
  return {
    val: null,
    children: {},
  }
}

Trie.prototype._set = function (node, subWord) {
  if (!subWord) {
    node.val = true
    return
  }
  const current = subWord[0]
  if (!node.children[current]) {
    node.children[current] = this._createNode()
  }
  this._set(node.children[current], subWord.slice(1))
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  this._set(this.node, word)
}

Trie.prototype._findNode = function (node, subWord) {
  if (!node) {
    return null
  }
  if (!subWord) {
    return node
  }
  const current = subWord[0]
  return this._findNode(node.children[current], subWord.slice(1))
}

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const node = this._findNode(this.node, word)
  return !!(node && node.val)
}

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  const node = this._findNode(this.node, prefix)
  return !!node
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
