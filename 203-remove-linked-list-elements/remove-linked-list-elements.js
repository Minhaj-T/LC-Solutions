/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let sentinal = new ListNode();
    sentinal.next = head;

    let prv = sentinal;

    while (prv && prv.next) {
        if (prv.next.val === val) {
            prv.next = prv.next.next;
        } else {
            prv = prv.next;
        }
    }
    return sentinal.next;

};