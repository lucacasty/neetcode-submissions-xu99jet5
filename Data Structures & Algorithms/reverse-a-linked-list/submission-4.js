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
        if(head == null || head.next === null) return head;

        let node = null;

        while(head) {
            node = new ListNode(head.val,node);
            head = head.next;
        }

        return node;
    }
}
