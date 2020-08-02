const {
  isAnagram,
} = require('../assignments/242');

test('from site', () => {
  expect(isAnagram('anagram', 'nagaram')).toBe(true);
  expect(isAnagram('rat', 'car')).toBe(false);
});
