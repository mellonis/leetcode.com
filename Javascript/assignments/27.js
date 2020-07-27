/**
 * @param {number[]} nums
 * @return {number}
 */
function removeElement(nums, val) {
  for (let i = 0; i < nums.length;) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i += 1;
    }
  }

  return nums.length;
}

exports.removeElement = removeElement;
