const {
  ListNode,
  mergeTwoLists,
} = require('../assignments/21');

test('from site', () => {
  expect(mergeTwoLists(
    new ListNode(1,
      new ListNode(2,
        new ListNode(4))),
    new ListNode(1,
      new ListNode(3,
        new ListNode(4))),
  ))
    .toEqual(
      new ListNode(1,
        new ListNode(1,
          new ListNode(2,
            new ListNode(3,
              new ListNode(4,
                new ListNode(4)))))),
    );
});
