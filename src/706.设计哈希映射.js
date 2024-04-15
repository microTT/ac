var MyHashMap = function () {
  this.storage = []
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const index = this.storage.findIndex(([k]) => k === key)
  if (index >= 0) {
    this.storage[index] = [key, value]
  } else {
    this.storage.unshift([key, value])
  }
}

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const index = this.storage.findIndex(([k]) => k === key)
  if (index >= 0) {
    return this.storage[index][1]
  } else {
    return -1
  }
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const index = this.storage.findIndex(([k]) => k === key)
  if (index < 0) {
    return
  }
  if (index === 0) {
    this.storage.shift()
    return
  }
  const backUp = this.storage.shift()
  this.storage[index - 1] = backUp
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
