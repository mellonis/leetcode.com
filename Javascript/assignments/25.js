function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
  const stack = [];
  const fake = new ListNode(null, head);
  let current = fake;
  let iterator = current;

  while (iterator.next) {
    stack.push(iterator.next);
    iterator = iterator.next;

    if (stack.length === k) {
      const { next } = stack[stack.length - 1];

      while (stack.length) {
        current.next = stack.pop();
        current = current.next;
      }

      current.next = next;
      iterator = current;
    }
  }

  return fake.next;
}

reverseKGroup(
  new ListNode(1,
    new ListNode(2,
      new ListNode(3,
        new ListNode(4,
          new ListNode(5))))),
  3,
);

exports.ListNode = ListNode;
exports.reverseKGroup = reverseKGroup;
