const {
  removeElement,
} = require('../assignments/27');

test('from site', () => {
  const listsAndResults = [
    [[3, 2, 2, 3], 3, [2, 2], 2],
    [[0, 1, 2, 2, 3, 0, 4, 2], 2, [0, 1, 3, 0, 4], 5],
  ];

  listsAndResults.forEach(([listBefore, val, listAfter, returnValue]) => {
    expect(removeElement(listBefore, val)).toBe(returnValue);
    expect(listBefore).toEqual(listAfter);
  });
});
