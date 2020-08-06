const {
  findDuplicates,
} = require('../assignments/442');

test('from site', () => {
  expect(findDuplicates(
    [4, 3, 2, 7, 8, 2, 3, 1],
  )).toEqual([2, 3]);
});
