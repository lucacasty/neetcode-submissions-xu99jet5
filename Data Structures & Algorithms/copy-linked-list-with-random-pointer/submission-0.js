// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let newHead = new Node(0,null,null);
        let prevNode = newHead;
        const oldPositions = new Map();
        const newPositions = new Map();

        let node = head;

        let i=0;

        while(node !== null) {
            prevNode.next = new Node(node.val,null,null);

            oldPositions.set(node,i);
            newPositions.set(i,prevNode.next);

            prevNode = prevNode.next;
            node = node.next;
            i++;
        }

        let newNode = newHead.next;
        node = head;
        i = 0;

        while(node!==null) {
            let randomOldPosition = oldPositions.get(node.random);
            newNode.random = newPositions.get(randomOldPosition);

            newNode = newNode.next;
            node = node.next;
        }

        return newHead.next;
    }
}
