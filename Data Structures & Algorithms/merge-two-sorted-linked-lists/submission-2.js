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

        let headResult = null;

        let listResult = new ListNode(0);

        while(list1 || list2) {
            let val1 = list1 ? list1.val : Infinity;
            let val2 = list2 ? list2.val : Infinity;
            console.log("list 1 val: "+val1);
            console.log("list 2 val: "+val2);
            if(val1 < val2) {
                listResult.next = list1;
                list1 = list1.next;
            } else {
                listResult.next = list2;
                list2 = list2.next;
            }
            listResult = listResult.next;
            if(!headResult) headResult = listResult;
            console.log(listResult.val);
        }

        return headResult;
    }
}
