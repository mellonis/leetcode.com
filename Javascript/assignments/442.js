function findDuplicates(nums) {
  const result = [];

  for (let i = 0, { length } = nums; i < length; i += 1) {
    const value = Math.abs(nums[i]);
    const ix = value - 1;

    if (nums[ix] > 0) {
      // eslint-disable-next-line no-param-reassign
      nums[ix] = -nums[ix];
    } else {
      result.push(value);
    }
  }

  return result;
}

exports.findDuplicates = findDuplicates;
