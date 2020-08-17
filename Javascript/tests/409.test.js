const {
  longestPalindrome,
} = require('../assignments/409');

test('from site', () => {
  expect(longestPalindrome('abccccdd')).toBe(7);
  expect(longestPalindrome('a')).toBe(1);
  expect(longestPalindrome('bb')).toBe(2);
});
