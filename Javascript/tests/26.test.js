const {
  removeDuplicates,
} = require('../assignments/26');

test('from site', () => {
  const listsAndResults = [
    [[1, 1, 2], [1, 2], 2],
    [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], [0, 1, 2, 3, 4], 5],
  ];

  listsAndResults.forEach(([listBefore, listAfter, returnValue]) => {
    expect(removeDuplicates(listBefore)).toBe(returnValue);
    expect(listBefore).toEqual(listAfter);
  });
});
