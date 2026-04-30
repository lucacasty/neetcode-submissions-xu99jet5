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
    diameterOfBinaryTree(root) {
        let maxDiameter = 0;

        function dfs(node) {
            if(node == null)  return 0;

            let leftLength = dfs(node.left);
            let rightLength = dfs(node.right);
            maxDiameter = Math.max(maxDiameter,leftLength+rightLength);

            return (1 + Math.max(dfs(node.left),dfs(node.right)));
        }

        dfs(root);
        return maxDiameter;
    }
}
