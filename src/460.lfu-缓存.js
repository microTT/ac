/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
const LFUCache = function (capacity) {
  this.maxSize = capacity
  this.size = 0
  this.keyValuestorage = {} // key: cell
  this.frequencyStorage = {} // frequency: { head, tail }
  this.minFrequency = 1
}

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.__createCell = function (key, value) {
  return {
    key,
    value,
    frequency: 1,
    prev: null,
    next: null,
  }
}

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.__linkMapPopTarget = function (linkMap, target) {
  const { head, tail } = linkMap || {}
  if (head === target) {
    const next = target.next
    if (next) {
      next.prev = null
    }
    target.next = null
    return { head: next, tail: next ? tail : null }
  } else if (tail === target) {
    const prev = target.prev
    target.prev = null
    prev.next = null
    return { head, tail: prev }
  } else {
    target.prev.next = target.next
    target.next.prev = target.prev
    target.prev = null
    target.next = null
    return { head, tail }
  }
}

LFUCache.prototype.__linkMapAppendTarget = function (linkMap, target) {
  const { head, tail } = linkMap || {}
  if (!head) {
    return { head: target, tail: target }
  }
  tail.next = target
  target.prev = tail
  return { head, tail: target }
}

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.__getAndUpdateFrequencyCell = function (key) {
  if (!this.keyValuestorage[key]) {
    return null
  }

  const current = this.keyValuestorage[key]
  current.frequency += 1
  this.frequencyStorage[current.frequency - 1] = this.__linkMapPopTarget(
    this.frequencyStorage[current.frequency - 1],
    current
  )
  this.frequencyStorage[current.frequency] = this.__linkMapAppendTarget(
    this.frequencyStorage[current.frequency],
    current
  )
  if (current.frequency - 1 === this.minFrequency) {
    this.minFrequency = this.frequencyStorage[this.minFrequency].head
      ? this.minFrequency
      : this.minFrequency + 1
  }
  return current
}

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.__removeMinFrequencyCell = function () {
  const minFrequencyLink = this.frequencyStorage[this.minFrequency]
  const minFrequencyCell = minFrequencyLink.head
  this.frequencyStorage[this.minFrequency] = this.__linkMapPopTarget(
    minFrequencyLink,
    minFrequencyCell
  )
  this.keyValuestorage[minFrequencyCell.key] = null

  this.minFrequency = 1

  this.size -= 1
}

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  const cell = this.__getAndUpdateFrequencyCell(key)
  return cell ? cell.value : -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  const cell = this.__getAndUpdateFrequencyCell(key)
  if (cell) {
    cell.value = value
    return
  }

  if (this.size === this.maxSize) {
    this.__removeMinFrequencyCell()
  }
  const newCell = this.__createCell(key, value)
  this.keyValuestorage[key] = newCell
  this.frequencyStorage[newCell.frequency] = this.__linkMapAppendTarget(
    this.frequencyStorage[newCell.frequency],
    newCell
  )
  this.size += 1
  this.minFrequency = 1
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// cnt(x) = 键 x 的使用计数
// cache=[] 将显示最后一次使用的顺序（最左边的元素是最近的）
let lfu = new LFUCache(3)
lfu.put(2, 2) // cache=[1,_], cnt(1)=1
lfu.put(1, 1) // cache=[2,1], cnt(2)=1, cnt(1)=1
lfu.get(2) // 返回 1
lfu.get(1) // 返回 1
lfu.get(2) // 返回 1
// cache=[1,2], cnt(2)=1, cnt(1)=2
lfu.put(3, 3) // 去除键 2 ，因为 cnt(2)=1 ，使用计数最小
// cache=[3,1], cnt(3)=1, cnt(1)=2
lfu.put(4, 4) // 返回 -1（未找到）
lfu.get(3) // 返回 3
// cache=[3,1], cnt(3)=2, cnt(1)=2
lfu.put(2) // 去除键 1 ，1 和 3 的 cnt 相同，但 1 最久未使用
// cache=[4,3], cnt(4)=1, cnt(3)=2
lfu.get(1) // 返回 -1（未找到）
lfu.get(4) // 返回 3
// cache=[3,4], cnt(4)=1, cnt(3)=3
