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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode();
        dummy.next = head;
        let fast = dummy;
        let slow = dummy;
        for(let i = 0; i < n; i++){
            fast = fast.next;
        }
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next.next;
        return dummy.next;

        // Si [1, 2, 3, 4] et n = 2
        // à cet endroit, fast = 3 / slow = 1;
    }
}
