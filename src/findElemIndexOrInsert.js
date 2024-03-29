/**
 * 二分法
 * [0, mid, length]
 * compare mid, target
 * mid > target [0, newMid, mid]
 * mid < target [mid, newMid, length]
 * mid === target return
 * 
 */

function main(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

console.log(main([-1,0,3,5,9,12], 9))  //  4
console.log(main([-1,0,3,5,9,12], -1))  // 0
console.log(main([-1,0,3,5,9,12], 4))  //  3