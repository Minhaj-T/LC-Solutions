/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    //set all the headB element in to the hashmap/set
    let newSet = new Set();

    while (headB) {
        newSet.add(headB)
        headB = headB.next
    }

    while (headA) {
        if (newSet.has(headA)) {
            return headA
        }
        headA = headA.next
    }
    return null

};