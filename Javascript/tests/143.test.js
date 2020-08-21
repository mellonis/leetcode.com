const {
  ListNode,
  reorderList,
} = require('../assignments/143');

test('from site', () => {
  expect(reorderList(
    new ListNode(1,
      new ListNode(2,
        new ListNode(3,
          new ListNode(4)))),
  ))
    .toEqual(
      new ListNode(1,
        new ListNode(4,
          new ListNode(2,
            new ListNode(3)))),
    );
  expect(reorderList(
    new ListNode(1,
      new ListNode(2,
        new ListNode(3,
          new ListNode(4,
            new ListNode(5))))),
  ))
    .toEqual(
      new ListNode(1,
        new ListNode(5,
          new ListNode(2,
            new ListNode(4,
              new ListNode(3))))),
    );
});
