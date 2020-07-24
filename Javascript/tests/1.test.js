const twoSum = require('../assignments/1');

test('from site', () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
