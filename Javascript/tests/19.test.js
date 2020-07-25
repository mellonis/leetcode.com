const {
  ListNode,
  removeNthFromEnd,
} = require('../assignments/19');

test('from site', () => {
  expect(removeNthFromEnd(
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
    2,
  ))
    .toEqual(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5)))));
  expect(removeNthFromEnd(new ListNode(1), 1)).toEqual(null);
  expect(removeNthFromEnd(new ListNode(1, new ListNode(2)), 1)).toEqual(new ListNode(1));
  expect(removeNthFromEnd(new ListNode(1, new ListNode(2)), 2)).toEqual(new ListNode(2));
});
