const {
  ListNode,
  swapPairs,
} = require('../assignments/24');

test('from site', () => {
  expect(swapPairs(
    new ListNode(1,
      new ListNode(2,
        new ListNode(3,
          new ListNode(4)))),
  ))
    .toEqual(
      new ListNode(2,
        new ListNode(1,
          new ListNode(4,
            new ListNode(3)))),
    );
});
