/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.maxStorageSize = capacity
  this.currentSize = 0
  this.head = null
  this.tail = null
  this.storage = {}
  /**
   * {
   *  key,
   *  val,
   *  next,
   *  prev
   * }
   */
}

LRUCache.prototype._pop = function () {
  const removedTail = this.tail
  this.tail = removedTail.prev
  if (this.tail) {
    this.tail.next = null
  }
  this.storage[removedTail.key] = undefined
  this.currentSize -= 1
  return removedTail
}

LRUCache.prototype._unshift = function (newNode) {
  newNode.prev = null
  newNode.next = this.head
  if (this.head) {
    this.head.prev = newNode
  }
  this.head = newNode
  this.tail ||= newNode
  this.storage[newNode.key] = newNode
  this.currentSize += 1
}

LRUCache.prototype._bubble = function (current) {
  if (current === this.head) {
    return
  }
  if (current === this.tail) {
    this._pop()
  } else {
    current.prev.next = current.next
    current.next.prev = current.prev
    this.currentSize -= 1
  }

  this._unshift(current)
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.storage[key] === undefined) {
    return -1
  }

  this._bubble(this.storage[key])

  return this.storage[key].val
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.storage[key] !== undefined) {
    const current = this.storage[key]
    current.val = value
    this._bubble(current)
    return
  }
  if (this.currentSize === this.maxStorageSize) {
    this._pop()
  }
  const newNode = {
    key,
    val: value,
  }
  this._unshift(newNode)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// const obj = new LRUCache(3)
// obj.put(1, 1)
// obj.put(2, 2)
// obj.put(3, 3)
// obj.put(4, 4)
// obj.get(4)
// obj.get(3)
// obj.get(2)
// obj.get(1)
// obj.put(5, 5)
// obj.get(1)
// obj.get(2)
// obj.get(3)
// obj.get(4)
// obj.get(5)
