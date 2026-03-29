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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        let listResult;
        if(list1.val < list2.val) {
            listResult = list1;
            list1 = list1.next;
        } else {
            listResult = list2;
            list2 = list2.next;
        }

        const headResult = listResult;

        while(list1 || list2) {
            let val1 = list1 ? list1.val : -Infinity;
            console.log("list 1 val: "+list1.val);
            console.log("list 2 val: "+list2.val);
            if(list1.val < list2.val) {
                listResult.next = list1;
                list1 = list1.next;
            } else {
                listResult.next = list2;
                list2 = list2.next;
            }
            listResult = listResult.next;
            console.log(listResult.val);
        }

        return headResult;
    }
}
