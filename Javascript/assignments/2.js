function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  if (l1 === null) {
    return l2;
  }

  if (l2 === null) {
    return l1;
  }

  const sum = l1.val + l2.val;
  let fSum;

  if (sum > 9) {
    fSum = new ListNode(sum % 10, new ListNode(1));
  } else {
    fSum = new ListNode(sum);
  }

  const rSum = addTwoNumbers(l1.next, l2.next);

  fSum.next = addTwoNumbers(fSum.next, rSum);

  return fSum;
}

exports.ListNode = ListNode;
exports.addTwoNumbers = addTwoNumbers;
