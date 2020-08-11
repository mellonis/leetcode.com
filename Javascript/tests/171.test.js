const {
  titleToNumber,
} = require('../assignments/171');

test('from site', () => {
  expect(titleToNumber('A')).toBe(1);
  expect(titleToNumber('B')).toBe(2);
  expect(titleToNumber('C')).toBe(3);
  expect(titleToNumber('Z')).toBe(26);
  expect(titleToNumber('AA')).toBe(27);
  expect(titleToNumber('AB')).toBe(28);
  expect(titleToNumber('ZY')).toBe(701);
});
