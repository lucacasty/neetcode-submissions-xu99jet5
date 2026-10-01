class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        const sub = [];
        function dfs(index) {
            if(index >= nums.length) {
                res.push([...sub]);    
                return;
            }
            
            sub.push(nums[index]);
            dfs(index+1);
            sub.pop();
            dfs(index+1);
        }
        dfs(0);
        return res;
    }
}
