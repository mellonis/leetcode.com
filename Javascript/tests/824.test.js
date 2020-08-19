const {
  toGoatLatin,
} = require('../assignments/824');

test('from site', () => {
  expect(toGoatLatin('I speak Goat Latin'))
    .toBe('Imaa peaksmaaa oatGmaaaa atinLmaaaaa');
  expect(toGoatLatin('The quick brown fox jumped over the lazy dog'))
    .toBe('heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa');
});
