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
        let curr = head;
        let next = 0;
        let prev = null;
        let tmp = 0;
        while(curr){
            next = curr.next
            curr.next = prev;
            prev = curr; 
            
            curr = next;
        }
        return prev;
    }
}
