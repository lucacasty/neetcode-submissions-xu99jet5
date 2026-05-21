class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let sum = 0;
        let start = 0;
        let minFound = Infinity;

        for(let end = 0;end < nums.length;end++) {
            sum += nums[end];
            if(sum >= target) {
                while(sum >= target) {
                    minFound = Math.min(minFound,end-start+1);
                    sum -= nums[start];
                    start++;
                }
            }
        }

        return minFound !== Infinity ? minFound : 0;
    }
}
