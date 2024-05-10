const Trie = function () {
  this.root = this._createNode()
}

Trie.prototype._createNode = function () {
  return {
    val: 0,
    children: {},
  }
}

Trie.prototype._put = function (node, subWord) {
  if (!subWord) {
    node.val += 1
    return
  }

  const current = subWord[0]

  node.children[current] ||= this._createNode()
  this._put(node.children[current], subWord.slice(1))
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  this._put(this.root, word)
}

Trie.prototype._findNode = function (node, subWord) {
  if (!subWord) {
    return node
  }
  if (!node) {
    return null
  }
  const current = subWord[0]
  return this._findNode(node.children[current], subWord.slice(1))
}

/**
 * @param {string} word
 * @return {number}
 */
Trie.prototype.countWordsEqualTo = function (word) {
  const node = this._findNode(this.root, word)
  return node?.val || 0
}

Trie.prototype._traveseAndFindWord = function (node, wordCallBack) {
  if (!node) {
    return
  }
  if (node.val) {
    wordCallBack(node)
  }
  Object.keys(node.children).forEach((current) =>
    this._traveseAndFindWord(node.children[current], wordCallBack)
  )
}

/**
 * @param {string} prefix
 * @return {number}
 */
Trie.prototype.countWordsStartingWith = function (prefix) {
  const node = this._findNode(this.root, prefix)
  if (!node) {
    return false
  }
  let sum = 0
  this._traveseAndFindWord(node, (node) => (sum += node.val))
  return sum
}

Trie.prototype._removeWord = function (node, subWord) {
  if (!node) {
    return null
  }

  if (!subWord) {
    node.val -= 1
  } else {
    const current = subWord[0]
    node.children[current] = this._removeWord(
      node.children[current],
      subWord.slice(1)
    )
  }

  if (
    !node.val &&
    !Object.keys(node.children).filter((current) => node.children[current])
      .length
  ) {
    return null
  }
  return node
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.erase = function (word) {
  this.root = this._removeWord(this.root, word)
  this.root ||= this._createNode()
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.countWordsEqualTo(word)
 * var param_3 = obj.countWordsStartingWith(prefix)
 * obj.erase(word)
 */
