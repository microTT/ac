/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

const RandomizedSet = function () {
  this.size = 0
  this.valIndexMap = {}
  this.valList = []
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (typeof this.valIndexMap[val] === 'number') {
    return false
  }
  this.valList[this.size] = val
  this.valIndexMap[val] = this.size
  this.size++
  return true
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (typeof this.valIndexMap[val] !== 'number') {
    return false
  }
  const removedIndex = this.valIndexMap[val]
  if (removedIndex === this.size - 1) {
    this.valIndexMap[val] = null
    this.size--
  } else {
    this.valIndexMap[val] = null
    const lastValue = this.valList[this.size - 1]
    this.valList[removedIndex] = lastValue
    this.valIndexMap[lastValue] = removedIndex
    this.size--
  }
  return true
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  if (!this.size) {
    return undefined
  }
  const randomIndex = Math.floor(Math.random() * this.size)
  return this.valList[randomIndex]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

// var obj = new RandomizedSet()
// var param_1 = obj.insert(0)
// var param_1 = obj.insert(1)
// var param_2 = obj.remove(0)
// var param_1 = obj.insert(2)
// var param_2 = obj.remove(1)
// var param_3 = obj.getRandom()
