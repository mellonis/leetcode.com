const {
  ListNode,
  addTwoNumbers,
} = require('../assignments/2');

test('from site', () => {
  expect(addTwoNumbers(
    new ListNode(2, new ListNode(4, new ListNode(3))),
    new ListNode(5, new ListNode(6, new ListNode(4))),
  ))
    .toEqual(
      new ListNode(7, new ListNode(0, new ListNode(8))),
    );
});
