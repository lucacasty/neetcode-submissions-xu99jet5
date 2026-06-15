class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let dp = new Array(nums.length).fill(0);
        dp[0] = nums[0];
        let maxSum = nums[0];
        for(let i=1;i<nums.length;i++) {
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
