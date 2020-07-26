const {
  intToRoman,
} = require('../assignments/12');

test('tests from site', () => {
  expect(intToRoman(3)).toBe('III');
  expect(intToRoman(4)).toBe('IV');
  expect(intToRoman(9)).toBe('IX');
  expect(intToRoman(58)).toBe('LVIII');
  expect(intToRoman(1994)).toBe('MCMXCIV');
});
