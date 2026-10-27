class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let left = 0;
        let right = nums.length-1;
        let res = new Array(nums.length);

        for(let i=nums.length-1;i>=0;i--) {
            if(Math.abs(nums[left]) > Math.abs(nums[right])) {
                res[i] = nums[left] * nums[left];
                left++;

            } else {
                res[i] = nums[right] * nums[right];
                right--;
            }
        }


        return res;
    }
}
