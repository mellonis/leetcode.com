function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  let currentNode = head;

  while (n) {
    // eslint-disable-next-line no-param-reassign
    n -= 1;
    currentNode = currentNode.next;
  }

  if (currentNode) {
    let beforeNthFromEnd = head;

    while (currentNode.next) {
      beforeNthFromEnd = beforeNthFromEnd.next;
      currentNode = currentNode.next;
    }

    beforeNthFromEnd.next = beforeNthFromEnd.next.next;

    return head;
  }

  return head.next;
}

exports.ListNode = ListNode;
exports.removeNthFromEnd = removeNthFromEnd;
