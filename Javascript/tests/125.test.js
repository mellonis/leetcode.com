const {
  isPalindrome,
} = require('../assignments/125');

test('from site', () => {
  expect(isPalindrome('')).toBe(true);
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  expect(isPalindrome('race a car')).toBe(false);
  expect(isPalindrome('0P')).toBe(false);
});
