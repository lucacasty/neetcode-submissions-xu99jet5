class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */


    combinationSum(nums, target) {
        const result = [];
        const sub = [];
        function dfs(index,sum) {
            if(index >= nums.length || sum > target) {
                return;
            } 

            if(sum == target) {
                result.push([...sub]);
                return;
            }

            sub.push(nums[index])
            dfs(index,sum+nums[index]);
            sub.pop();
            dfs(index+1,sum);
        }
        dfs(0,0);
        return result;
    }
}
