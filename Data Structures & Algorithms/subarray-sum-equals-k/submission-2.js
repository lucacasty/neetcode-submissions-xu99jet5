class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */

    subarraySum(nums, k) {
        const prefixMap = new Map();
        let counter = 0;

        let sum = 0;
        for(let i=0;i<nums.length;i++) {
            sum += nums[i];             //adding sum
            if(sum == k)  counter++;    //if sum is == k count ++
            counter += (prefixMap.get(sum-k) || 0);
            prefixMap.set(sum,(prefixMap.get(sum) || 0) + 1);
        }  

        return counter;
    }
}
