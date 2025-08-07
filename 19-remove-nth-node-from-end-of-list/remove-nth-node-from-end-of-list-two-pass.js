/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Two Pass Solution
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;

    let length = 0;
    while (head) {
        length++;
        head = head.next;
    }

    let prvPos = length - n;

    let prv = sentinel;
    for (let i = 0; i < prvPos; i++) {
        prv = prv.next
    }
    prv.next = prv.next.next

    return sentinel.next;


};