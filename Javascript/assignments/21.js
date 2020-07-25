function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  let l1c = l1;
  let l2c = l2;
  const fake = {
    next: null,
  };
  let current = fake;

  while (l1c && l2c) {
    if (l1c.val < l2c.val) {
      current.next = l1c;
      l1c = l1c.next;
    } else {
      current.next = l2c;
      l2c = l2c.next;
    }

    current = current.next;
  }

  if (l1c) {
    current.next = l1c;
  }

  if (l2c) {
    current.next = l2c;
  }

  return fake.next;
}

exports.ListNode = ListNode;
exports.mergeTwoLists = mergeTwoLists;
