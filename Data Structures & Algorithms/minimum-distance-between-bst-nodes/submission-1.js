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
    minDiffInBST(root) {
        let minDiff = Infinity;
        let prev = null;

        function dfs(node) {
            if(!node) return;

            dfs(node.left);

            if(prev) {
                minDiff = Math.min(Math.abs(node.val-prev.val),minDiff);
            }
            prev = node;
            dfs(node.right);
        }
        dfs(root);

        return minDiff;
    }
}
