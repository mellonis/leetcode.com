const {
  isValid,
} = require('../assignments/20');

test('from site', () => {
  expect(isValid('()')).toBe(true);
  expect(isValid('()[]{}')).toBe(true);
  expect(isValid('(]')).toBe(false);
  expect(isValid('([)]')).toBe(false);
  expect(isValid('{[]}')).toBe(true);
  expect(isValid('[')).toBe(false);
});
