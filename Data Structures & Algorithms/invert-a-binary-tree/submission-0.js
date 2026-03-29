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
     * @return {TreeNode}
     */
    invertTree(root) {
        function invertChildren(node) {
            if(!node) return;
            let tmp = node.left;
            node.left = node.right;
            node.right = tmp;
            invertChildren(node.left);
            invertChildren(node.right);
        }
        invertChildren(root);
        return root;
    }
}
