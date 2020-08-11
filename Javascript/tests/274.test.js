const {
  hIndex,
} = require('../assignments/274');

test('from site', () => {
  expect(hIndex([3, 0, 6, 1, 5])).toBe(3);
  expect(hIndex([100])).toBe(1);
  expect(hIndex([6, 6, 4, 8, 4, 3, 3, 10])).toBe(4);
});
