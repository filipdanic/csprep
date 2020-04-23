const ListNode = (val, next = null) => ({
  val: val,
  next: next,
});

export default ListNode;

export const serializeListToArray = (head) => {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
};
