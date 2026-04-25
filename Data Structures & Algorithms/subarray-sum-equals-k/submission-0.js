class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */

    subarraySum(nums, k) {
        let counter = 0;
        //start from first element
        for(let i=0;i<nums.length;i++) {
            let sum = 0;
            for(let j=i;j<nums.length;j++) {
                //keep the sum while iterating the array 
                sum += nums[j];
                //if sum == k -> count++
                if(sum == k) counter ++;
            }
            //start from next element and do the same thing
        }

        return counter;
    }
}
