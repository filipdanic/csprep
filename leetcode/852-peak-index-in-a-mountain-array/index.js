/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = (head) => {
  let slow = head;
  let fast = head && head.next ? head.next.next : null;
  const headOfEvenList = head ? head.next : null;
  let tailOfEvenList = headOfEvenList;

  while (fast !== null) {
    const nextEvenNode = fast.next;
    fast.next = headOfEvenList;
    slow.next = fast;
    tailOfEvenList.next = nextEvenNode;
    tailOfEvenList = nextEvenNode;

    slow = slow.next;
    fast = nextEvenNode && nextEvenNode.next ? nextEvenNode.next : null;
  }
  return head;
};

export default oddEvenList;
