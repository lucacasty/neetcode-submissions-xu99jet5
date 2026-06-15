class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let dp = new Array(nums.length).fill(0);
        let maxSum = -Infinity;
        for(let i=0;i<nums.length;i++) {
            if(dp[i-1] > 0) {
                dp[i] = dp[i-1] + nums[i];
            } else {
                dp[i] = nums[i];
            }
            maxSum = Math.max(maxSum,dp[i]);
        }

        return maxSum;
    }
}
