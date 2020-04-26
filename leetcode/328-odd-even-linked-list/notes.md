# Odd Even Linked List

https://leetcode.com/problems/odd-even-linked-list/

Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:
Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL

Example 2:
Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL

## Solution

The problem already has a good official explanation that somewhat matches what I did here, so better read that one as pointer manipulation tends to be difficult to explain without pictures (which they do have.)

My take on the solution was to use a slow and fast pointer, a common trick when dealing with Linked Lists.

### Complexity

Time: `~O(n)` – worth point that I specify the approximation (`~`) because it’s actually `O(n/2)` because the fast pointer skips the even items entirely.
Space: `O(1)` – we only setup a few pointers to help us manipulate the list.
