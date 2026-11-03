class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAbsoluteSum(nums) {
        let dpPos = new Array(nums.length).fill(0);
        let dpNeg = new Array(nums.length).fill(0);
        let min = nums[0];
        let max = nums[0];
        dpPos[0] = nums[0]
        dpNeg[0] = nums[0]

        for(let i=1;i<nums.length;i++) {
            dpPos[i] = Math.max(dpPos[i-1]+nums[i],nums[i])
            max = Math.max(max,dpPos[i]);

            dpNeg[i] = Math.min(dpNeg[i-1]+nums[i],nums[i])
            min = Math.min(min,dpNeg[i]);
        }

        console.log(dpPos)
        console.log(dpNeg)

        return Math.max(max,Math.abs(min));
    }
}
