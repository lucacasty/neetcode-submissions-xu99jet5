class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let copyNums = [...nums];
        k = k % nums.length;
        for(let i=0;i<nums.length;i++) {
            let indexCopy = i-k;
            if(indexCopy<0) {
                indexCopy = nums.length+indexCopy;
            }
            nums[i] = copyNums[indexCopy];
        }
    }
}
