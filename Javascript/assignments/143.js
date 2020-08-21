function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
  const stack = [];

  let current = head;

  while (current) {
    stack.push(current);
    current = current.next;
  }

  current = head;

  while (stack.length > 0) {
    const next = stack.pop();

    if (current === next) {
      current.next = null;
      break;
    }

    if (current.next === next) {
      current.next.next = null;
      break;
    }

    const tmp = current.next;
    next.next = current.next;
    current.next = next;
    current = tmp;
  }

  return head;
}

exports.ListNode = ListNode;
exports.reorderList = reorderList;
