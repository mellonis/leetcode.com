const {
  multiply,
} = require('../assignments/43');

test('from site', () => {
  expect(multiply('2', '3')).toBe('6');
  expect(multiply('123', '456')).toBe('56088');
});

test('my', () => {
  expect(multiply('0', '1')).toBe('0');
  expect(multiply('1', '0')).toBe('0');
  expect(multiply('10', '1')).toBe('10');
  expect(multiply('1', '10')).toBe('10');
});
