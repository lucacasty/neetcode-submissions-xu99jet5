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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {

        function recursiveSearch(node) {
            if(val > node.val) {
                if(node.right) {
                    recursiveSearch(node.right);
                } else {
                    node.right = new TreeNode(val);
                    return;
                }
            } else {
                if(node.left) {
                    recursiveSearch(node.left);
                } else {
                    node.left = new TreeNode(val);
                    return;
                }
            }
        }
        recursiveSearch(root);
        return root;

    }
}
