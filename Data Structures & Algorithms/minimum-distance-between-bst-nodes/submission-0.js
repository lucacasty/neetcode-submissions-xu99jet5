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
        let arr = [];
        function dfs(node) {
            if(!node) return;
            arr.push(node.val)
            dfs(node.left)
            dfs(node.right)
        }
        dfs(root);

        arr.sort((a,b)=>a-b)
        
        let minDiff = Infinity;
        for(let i=1;i<arr.length;i++) {
            minDiff = Math.min(arr[i]-arr[i-1],minDiff);
        }

        return minDiff;
    }
}
