const {
  numsSameConsecDiff,
} = require('../assignments/967');

test('from site', () => {
  expect(numsSameConsecDiff(3, 7))
    .toEqual([181, 292, 707, 818, 929]);
  expect(numsSameConsecDiff(2, 1))
    .toEqual([10, 12, 21, 23, 32, 34, 43, 45, 54, 56, 65, 67, 76, 78, 87, 89, 98]);
  expect(numsSameConsecDiff(2, 0))
    .toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99]);
});

test('my tests', () => {
  expect(numsSameConsecDiff(1, 0)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
