const convert = require('../assignments/6');

test('from site', () => {
  expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
  expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
});
