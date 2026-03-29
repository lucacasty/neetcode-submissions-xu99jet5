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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

        function dfs(root,subRoot) {
            if(root.val == subRoot.val && isSameTree(root,subRoot)) {
                return true;
            } else {
               return dfs(root.left,subRoot) || dfs(root.rigth,subRoot);
            }
        }

        function isSameTree(node1,node2) {
            if(!node1 && !node2) return true;
            if(!node1 || !node2 || node1.val !== node2.val) return false;
            return isSameTree(node1.left,node2.left) && isSameTree(node1.right,node2.right);
        }
        return dfs(root,subRoot);
    }
}
