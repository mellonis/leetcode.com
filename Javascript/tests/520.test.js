const {
  detectCapitalUse,
} = require('../assignments/520');

test('from site', () => {
  expect(detectCapitalUse('USA')).toBe(true);
  expect(detectCapitalUse('g')).toBe(true);
});
