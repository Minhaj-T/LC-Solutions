/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // add sentinal node at start
    let sentinel = new ListNode();
    sentinel.next = head

    // move my first pointer ahead by n
    let first = sentinel;
    for (let i = 0; i < n; i++) {
        first = first.next
    }
    let second = sentinel;

    // move both pointer utill first pointer reaches the last node
    while (first && first.next) {
        first = first.next;
        second = second.next
    }

    // just delete the second.next
    second.next = second.next.next

    return sentinel.next

};