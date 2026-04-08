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
     * @return {void}
     */
    reorderList(head) {
        if (!head) return;

        let node = head;
        let arr = [];

        // build array
        while (node) {
            arr.push(node);
            node = node.next;
        }

        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            arr[left].next = arr[right];
            left++;

            if (left === right) break;

            arr[right].next = arr[left];
            right--;
        }

        arr[left].next = null;
    }
}
