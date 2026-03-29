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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let head = new ListNode(0,null);
        let l3 = head;
        let rest = 0;
        while(l1 || l2) {
            let v1 = l1 ? l1.val : 0;
            let v2 = l2 ? l2.val : 0;
            l3.next = new ListNode((v1+v2+rest)%10,null);
            rest = Math.floor((v1+v2+rest)/10);
            l3 = l3.next;
            if(l1)  l1 = l1.next;
            if(l2)  l2 = l2.next;
        }
        if(rest !== 0) {
            l3.next = new ListNode(rest,null);
        }

        return head.next;
    }
}
