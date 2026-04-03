class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        for(let i=0;i<nums.length;i++) {
            let min = Infinity;
            let indexMin = i;
            let j=i;
            while(j<nums.length) {
                if(nums[j] < min) {
                    min = nums[j];
                    indexMin = j;
                }
                j++;
            }
            let temp = nums[i];
            nums[i] = nums[indexMin];
            nums[indexMin] = temp;
        }
    }
}
