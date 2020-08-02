const {
  spiralOrder,
} = require('../assignments/54');

test('from site', () => {
  expect(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  expect(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  expect(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
});
