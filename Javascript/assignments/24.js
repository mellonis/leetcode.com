const {
  reverseKGroup,
} = require('./25');

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
  return reverseKGroup(head, 2);
}

exports.ListNode = ListNode;
exports.swapPairs = swapPairs;
