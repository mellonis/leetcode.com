const {
  ListNode,
  mergeKLists,
} = require('../assignments/23');

test('', () => {
  expect(mergeKLists([
    new ListNode(1,
      new ListNode(4,
        new ListNode(5))),
    new ListNode(1,
      new ListNode(3,
        new ListNode(4))),
    new ListNode(2,
      new ListNode(6)),
  ]))
    .toEqual(
      new ListNode(1,
        new ListNode(1,
          new ListNode(2,
            new ListNode(3,
              new ListNode(4,
                new ListNode(4,
                  new ListNode(5,
                    new ListNode(6)))))))),
    );
  expect(mergeKLists([null]))
    .toBe(null);
});
