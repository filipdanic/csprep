import oddEvenList from './index';
import ListNode, {serializeListToArray} from '../sharedPrimitives/ListNode';

describe('deepestLeavesSum', () => {
  test('Initial edge cases', () => {
    expect(serializeListToArray(oddEvenList())).toEqual([]);

    expect(serializeListToArray(oddEvenList(ListNode(1)))).toEqual([1]);

    expect(serializeListToArray(oddEvenList(ListNode(1, ListNode(2))))).toEqual([1, 2]);

    expect(serializeListToArray(oddEvenList(ListNode(1, ListNode(2, ListNode(3)))))).toEqual([1, 3, 2]);
  });

  test('Example 1', () => {
    expect(serializeListToArray(oddEvenList(
      ListNode(1,
        ListNode(2,
          ListNode(3,
            ListNode(4,
              ListNode(5)))))
      ))).toEqual([1, 3, 5, 2, 4]);
  });

  test('Example 2', () => {
    expect(serializeListToArray(oddEvenList(
      ListNode(2,
        ListNode(1,
          ListNode(3,
            ListNode(5,
              ListNode(6,
                ListNode(4,
                  ListNode(7)))))))
    ))).toEqual([2, 3, 6, 7, 1, 5, 4]);
  });
});
