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
     * @return {number[]}
     */
    inorderTraversal(root) {
        this.result = [];

        const traverse = (node) => {
            if (!node) return;
            traverse(node.left);
            this.result.push(node.val);
            traverse(node.right);
        };

        traverse(root);
        return this.result;
    }
}
