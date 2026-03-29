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
    /*removeNthFromEnd(head, n) {
        let node = head;
        let count = 0; 

        //count how many nodes
        while(node) {
            node = node.next;
            count ++;
        }

        if(count - n == 0) return head.next;


        //we need to search count-n node
        let secondCount = 0;
        node = head;   

        while(node) {
            if(secondCount == (count - n -1)) {
                node.next = node.next.next ? node.next.next : null;
                break;
            }
            node = node.next;
            secondCount++;
        }

        return head;
    }*/
        removeNthFromEnd(head, n) {
        const nodes = [];
        let cur = head;
        while (cur) {
            nodes.push(cur);
            cur = cur.next;
        }

        const removeIndex = nodes.length - n;
        if (removeIndex === 0) {
            return head.next;
        }

        nodes[removeIndex - 1].next = nodes[removeIndex].next;
        return head;
    }
}
