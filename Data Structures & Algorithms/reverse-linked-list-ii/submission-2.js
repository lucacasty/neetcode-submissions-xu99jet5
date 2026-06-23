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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        if (left === right) return head;

        let index = 1;
        let node = head;
        let lastNode = null;
        while(node && index < left) {
            lastNode = node;
            node = node.next;
            index++;
        }

        const arr = [];
        while(node && index <= right) {
            arr.push(node.val);
            node = node.next;
            index++;
        }

        for(let i=0;i<arr.length;i++) {
            let newNode = new ListNode(arr[i],node);
            node = newNode;
        }

        if(lastNode) {
            lastNode.next = node;
            return head;
        } else {
            return node;
        }
    }
}
