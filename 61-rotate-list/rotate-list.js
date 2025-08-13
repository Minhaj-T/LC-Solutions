/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next) return head;

    //calculate the length
    let length = 0;
    let curr = head;
    while (curr) {
        length++;
        curr = curr.next;
    }

    // to avoid unnecesary rotations
    k = k % length;

    let f = head;
    //move f pointer k steps ahead.
    for (let i = 0; i < k; i++) {
        f = f.next;
    }

    let s = head;
    // reaching the end of the list
    while (f.next) {
        f = f.next;
        s = s.next;
    }

    f.next = head;
    let newHead = s.next;
    s.next = null;

    return newHead;


};