/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {

    // find the middle element
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse the second half of the LL
    let prv = null;
    let curr = slow;
    while(curr){
        let temp = curr.next
        curr.next = prv;
        prv = curr;
        curr = temp
    }

    // check for palindrome
    let firstList = head;
    let secondList = prv;
    while(secondList){
        if(firstList.val !== secondList.val){
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next
    }
    return true;

};