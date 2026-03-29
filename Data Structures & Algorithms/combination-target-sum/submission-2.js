class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        const result = [];
        const sequence = [];

        function recursive(i, target) {
            if(target == 0) {
                result.push([...sequence]);
                return;
            }
            if(i>=nums.length || target < 0) {
                return;
            }

            sequence.push(nums[i]);
            recursive(i,target-nums[i]);

            sequence.pop();
            recursive(i+1,target);
        }

        recursive(0,target);
        return result;
    }
}
