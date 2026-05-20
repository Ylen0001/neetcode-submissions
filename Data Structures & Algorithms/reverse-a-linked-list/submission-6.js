/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let next = 0;
        let curr = head;
        while(curr){
            next = curr.next; // next = 2;
            curr.next = prev; // curr.next = null;
            prev = curr; // prev = 1
 
            curr = next;; //
        }
        return prev;
    }
}
