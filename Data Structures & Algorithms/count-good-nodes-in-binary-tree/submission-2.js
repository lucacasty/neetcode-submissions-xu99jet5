/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {

        let counter = 0;

        function dfs(node, prevMax) {
            if(!node) return;
            if(node.val >= prevMax) counter++;

            dfs(node.left,Math.max(node.val,prevMax));
            dfs(node.right,Math.max(node.val,prevMax));
        }

        dfs(root,-Infinity);

        return counter;
    }
}
