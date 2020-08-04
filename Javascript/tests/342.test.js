const {
  isPowerOfFour,
} = require('../assignments/342');

test('from site', () => {
  expect(isPowerOfFour(16)).toBe(true);
  expect(isPowerOfFour(5)).toBe(false);
});
