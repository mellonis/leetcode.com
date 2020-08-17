const {
  distributeCandies,
} = require('../assignments/1103');

test('from site', () => {
  expect(distributeCandies(7, 4)).toEqual([1, 2, 3, 1]);
  expect(distributeCandies(10, 3)).toEqual([5, 2, 3]);
});
