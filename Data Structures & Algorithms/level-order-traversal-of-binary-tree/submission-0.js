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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root)  return [];

        const res = [];

        const queue = [];
        queue.push(root);

        while(queue.length) {
            let length = queue.length;
            let nums = [];
            for(let i=0;i<length;i++){
                let node = queue.shift();
                nums.push(node.val);
                if(node.left)   queue.push(node.left);
                if(node.right)   queue.push(node.right);
            }
            res.push(nums);
        }

        return res;
    }
}
