/**
 * 二分法
 * [0, mid, length]
 * compare mid, target
 * mid > target [0, newMid, mid]
 * mid < target [mid, newMid, length]
 * mid === target return
 *
 */

function find(nums, target, offset) {
  if (nums.length <= 0) {
    return -1
  }
  const mid = Math.floor(nums.length / 2)
  const midElem = nums[mid]
  console.log(nums, mid)
  if (midElem === target) {
    return offset + mid
  } else if (midElem > target) {
    return find(nums.slice(0, mid), target, offset)
  } else {
    return find(nums.slice(mid + 1, nums.length), target, mid)
  }
}

function main(nums, target) {
  let start = 0
  let end = nums.length
  while (start < end) {
    const mid = start + Math.floor((end - start) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
}

console.log(main([-1, 0, 3, 5, 9, 12], 9))
console.log(main([-1, 0, 3, 5, 9, 12], -1))
console.log(main([-1, 0, 3, 5, 9, 12], 12))
