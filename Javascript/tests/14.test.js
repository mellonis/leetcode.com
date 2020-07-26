const {
  longestCommonPrefix,
} = require('../assignments/14');

test('from site', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  expect(longestCommonPrefix([])).toBe('');
  expect(longestCommonPrefix([''])).toBe('');
  expect(longestCommonPrefix(['a'])).toBe('a');
  expect(longestCommonPrefix(['c', 'c'])).toBe('c');
});
