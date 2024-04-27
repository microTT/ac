/*
 * @lc app=leetcode.cn id=1146 lang=javascript
 *
 * [1146] 快照数组
 */

// @lc code=start
/**
 * @param {number} length
 */
const SnapshotArray = function (length) {
  this.maxSize = length
  this.snaped = false
  this.currentSnapId = -1
  this.currentStorage = {}
  this.snapshotStorage = {}
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  if (index >= this.maxSize) {
    return
  }
  if (this.snaped) {
    this.currentStorage = { ...this.currentStorage }
  }
  this.snaped = false
  this.currentStorage[index] = val
}

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  this.currentSnapId += 1
  this.snapshotStorage[this.currentSnapId] = this.currentStorage
  this.snaped = true
  return this.currentSnapId
}

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  return this.snapshotStorage[snap_id][index] || 0
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
// @lc code=end
