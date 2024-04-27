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
  this.currentSnapId = 0
  this.snapshotStorage = {}
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  this.snapshotStorage[index] ||= []
  this.snapshotStorage[index].push([this.currentSnapId, val])
}

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  this.currentSnapId += 1
  return this.currentSnapId - 1
}

SnapshotArray.prototype.__searchIndexSnapshot = function (snapList, sarchId) {
  let left = -1
  let right = snapList.length
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2)
    const current = snapList[mid]
    if (current[0] <= sarchId) {
      left = mid
    } else {
      right = mid
    }
  }
  return left >= 0 ? snapList[left] : null
}

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  const snapList = this.snapshotStorage[index] || []
  if (!snapList.length) {
    return 0
  }
  const setHistory = this.__searchIndexSnapshot(snapList, snap_id)
  return setHistory ? setHistory[1] : 0
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
// @lc code=end
