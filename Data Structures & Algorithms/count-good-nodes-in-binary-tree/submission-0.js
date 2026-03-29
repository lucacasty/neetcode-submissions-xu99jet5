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
        let maxFound = -Infinity;
        let count = 0;

        function dfs(node) {
            if(!node) return;

            if(node.val >= maxFound) {
                count++;
                maxFound = Math.max(maxFound,node.val);
            }

            dfs(node.left)
            maxFound = root.val;
            dfs(node.right)
        }

        dfs(root);
        return count;
    }
}
