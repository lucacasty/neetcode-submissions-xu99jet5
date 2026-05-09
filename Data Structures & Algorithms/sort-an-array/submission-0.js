class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        for(let i=0;i<nums.length;i++) {
            let minIndex = i;
            let minVal = nums[i];
            for(let j=i+1;j<nums.length;j++) {
                if(minVal > nums[j]) {
                    minVal = nums[j];
                    minIndex = j;
                }
            }
            let tmp = nums[i];
            nums[i] = nums[minIndex];
            nums[minIndex] = tmp;
        }
        return nums;    
    }
}
