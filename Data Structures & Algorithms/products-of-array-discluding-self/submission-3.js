class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let products = nums[0];
        let zeroFound = 0;
        for(let i = 1;i<nums.length;i++) {
            if(nums[i] == 0) {
                zeroFound++;
            } else {
                products = products * nums[i];
            }
        }

        if(zeroFound > 1){
            return new Array(nums.length).fill(0);
        }

        for(let i=0;i<nums.length;i++) {
            if(zeroFound > 0) {
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
