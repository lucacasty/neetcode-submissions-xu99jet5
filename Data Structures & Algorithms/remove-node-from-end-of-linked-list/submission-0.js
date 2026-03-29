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
        let node = head;
        let count = 0; 

        //count how many nodes
        while(node) {
            node = node.next;
            count ++;
        }


        //we need to search count-n node
        let secondCount = 0;
        node = head;

        while(node) {
            if(secondCount >= (count - n -1)) {
                if(secondCount == 0){
                    head = null;
                } else {
                    node.next = node.next.next ? node.next.next : null;
                }
                break;
            }
            node = node.next;
            secondCount++;
        }

        return head;
    }
}
