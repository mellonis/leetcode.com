const {
  trap,
} = require('../assignments/42');

test('from site', () => {
  expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
  expect(trap([5, 4, 1, 2])).toEqual(1);
  expect(trap([5, 2, 1, 2, 1, 5])).toEqual(14);
  expect(trap([9, 2, 9, 3, 2, 2, 1, 4, 8])).toEqual(35);
  expect(trap([2, 8, 5, 5, 6, 1, 7, 4, 5])).toEqual(12);
});
