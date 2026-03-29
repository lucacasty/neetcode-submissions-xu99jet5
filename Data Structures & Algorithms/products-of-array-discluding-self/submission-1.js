class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let products = nums[0];
        let zeroFound = false;
        for(let i = 1;i<nums.length;i++) {
            if(nums[i] == 0) {
                zeroFound = true;
            } else {
                products = products * nums[i];
            }
        }

        for(let i=0;i<nums.length;i++) {
            if(zeroFound) {
                if(nums[i] !== 0) {
                    nums[i] = 0;
                } else {
                    nums[i] = products;
                }
            } else {
                nums[i] = products / nums[i];
            }
        }

        return nums;
    }
}
