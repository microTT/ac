/**
 * 双指针删除数组元素
 * 
 */

function main(nums, val) {
  let slow = 0;
  for(let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] === val) {
      continue;
    }
    nums[slow] = nums[fast];
    slow += 1;
  }

return slow;
}


console.log(main([-1,0,3,5,3,12], 3))
console.log(main([-1,0,3,5,9,12], 9))
console.log(main([-1,0,3,5,9,12], 100))