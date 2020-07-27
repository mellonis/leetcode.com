/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  for (let i = 1; i < nums.length;) {
    if (nums[i - 1] === nums[i]) {
      nums.splice(i, 1);
    } else {
      i += 1;
    }
  }

  return nums.length;
}

exports.removeDuplicates = removeDuplicates;
