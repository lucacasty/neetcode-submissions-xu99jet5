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
     * @param {number} target
     * @return {TreeNode}
     */
    removeLeafNodes(root, target) {
        function dfs(node) {
            if(!node)  return null;
            node.left = dfs(node.left);
            node.right = dfs(node.right);
            if(node.left == null && node.right == null && node.val == target){
                return null;
            } else {

                return node;
            }
        }
        return dfs(root);
    }
}
