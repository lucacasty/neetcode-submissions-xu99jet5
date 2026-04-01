class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    lengthOfLIS(nums) {

        let dp = new Array(nums.length).fill(1);

        for(let i=nums.length-2;i>=0;i--) {
            let j=i+1;
            while(j<nums.length) {
                if(nums[i] < nums[j]) {
                    dp[i] = Math.max(dp[i],1+(dp[j]));
                }
                j++;
            }
        }

        return Math.max(...dp);
    }
}
