const isPalindrome = require('../assignments/9');

test('from site', () => {
  expect(isPalindrome(121)).toBe(true);
  expect(isPalindrome(-121)).toBe(false);
  expect(isPalindrome(10)).toBe(false);
});
