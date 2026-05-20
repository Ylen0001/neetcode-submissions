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
     * @return {boolean}
     */
    hasCycle(head) {
        
        let slow = head;
        let fast = head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
            if(fast === slow)
                return true
        }
        return false;
    }
}

/* Imaginons qu'une Linked List cyclée est comme un terrain circulaire. 
Si on y met deux coureurs, le plus rapide va forcément doubler le plus lent à un moment. 
*/