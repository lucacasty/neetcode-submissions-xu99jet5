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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let heap = new Array();

        function dfs(node) {
            if(!node)  return;
            heap.push(node.val);

            dfs(node.left);
            dfs(node.right);
        }
        dfs(root);

        heap.sort((a, b) => a - b);
        return heap[k-1];
    }
}
