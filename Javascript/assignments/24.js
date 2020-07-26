function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
  const fake = new ListNode(null, head);
  let current = fake;

  while (current.next && current.next.next) {
    const first = current.next;
    const second = first.next;
    const third = second.next;

    current.next = second;
    second.next = first;
    first.next = third;

    current = first;
  }

  return fake.next;
}

exports.ListNode = ListNode;
exports.swapPairs = swapPairs;
