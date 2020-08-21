const {
  sortArrayByParity,
} = require('../assignments/905');

test('from site', () => {
  expect(sortArrayByParity([3, 1, 2, 4])).toEqual([4, 2, 1, 3]);
});
