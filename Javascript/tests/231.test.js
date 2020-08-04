const {
  isPowerOfTwo,
} = require('../assignments/231');

test('from site', () => {
  expect(isPowerOfTwo(1)).toBe(true);
  expect(isPowerOfTwo(16)).toBe(true);
  expect(isPowerOfTwo(218)).toBe(false);
});
