function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function qsort(array) {
  array.sort((a, b) => a.val - b.val);
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  const copy = [...lists].filter((list) => !!list);

  qsort(copy);

  const fake = new ListNode(null, null);
  let current = fake;

  while (copy.length) {
    // eslint-disable-next-line prefer-destructuring
    current.next = copy[0];
    // eslint-disable-next-line prefer-destructuring
    current = current.next;
    copy[0] = copy[0].next;

    const { length } = copy;

    if (copy[0] && copy.length > 1) {
      for (let i = 0; i < length - 1; i += 1) {
        if (copy[i].val > copy[i + 1].val) {
          const t = copy[i];

          copy[i] = copy[i + 1];
          copy[i + 1] = t;
        } else {
          break;
        }
      }
    } else {
      copy.splice(0, 1);
    }
  }

  return fake.next;
}

exports.ListNode = ListNode;
exports.mergeKLists = mergeKLists;
