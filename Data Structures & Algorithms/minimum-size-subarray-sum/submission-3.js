class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let sum = 0;
        let start = 0;
        let end = 0;
        let minFound = Infinity;

        while(sum<target && end<nums.length) {

            while(sum<target && end<nums.length) {
                sum += nums[end];
                end++;
            }

            while(sum >= target) {
                if(sum-nums[start] >= target) {
                    sum-=nums[start];
                    start++;
                } else {
                    minFound = Math.min(minFound,end-start);
                    sum -= nums[start];
                    start++;
                    break;
                }
            }
        }

        if(end == nums.length && sum < target && minFound == Infinity) {
            return 0;
        } else {
            return minFound;
        }
    }
}
