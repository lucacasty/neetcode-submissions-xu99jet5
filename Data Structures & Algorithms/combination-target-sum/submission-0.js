class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */

    /*
    9*
    2               5               6               9
    2569
    */


    combinationSum(nums, target) {

        const result = [];
        let candidates = [];

        function recursion(i,nums,target) {
            if(target == 0) {
                result.push([...candidates]);
                return;
            } else if(i >= nums.length || target < 0){
                return;
            }

            candidates.push(nums[i]);
            recursion(i,nums,target-nums[i]);
            candidates.pop();
            recursion(i+1,nums,target);
            
        }

        recursion(0,nums,target);
        return result;
    }
}
