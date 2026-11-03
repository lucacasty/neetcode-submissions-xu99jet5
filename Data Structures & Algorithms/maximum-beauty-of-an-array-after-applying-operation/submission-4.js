class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */

    //[1,3,5] -> [0,2][2,4][4,6]

    maximumBeauty(nums, k) {
        nums.sort((a,b) => a-b)

        let ranges = [];
        for(let i=0;i<nums.length;i++) {
            ranges.push([nums[i]-k,nums[i]+k]);
        }

        let left = 0;
        let max = 0;
        for(let right=0;right<ranges.length;right++) {
            while(ranges[right][0] > ranges[left][1]) {
                left++;
            }

            max = Math.max(max,right-left+1);
        }

        return max;
    }
}
