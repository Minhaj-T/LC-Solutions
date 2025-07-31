/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let newSet = new Set()

    let curr = head;

    while (curr) {
        if (newSet.has(curr)) return true;
        newSet.add(curr);
        curr = curr.next
    }
    return false;

};