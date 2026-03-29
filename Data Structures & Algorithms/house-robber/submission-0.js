class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        let houseEven = 0;
        let houseOdd = 0;

        for(let i=0;i<nums.length;i++) {
            if(i%2==0) {
                houseEven += nums[i];
            }else {
                houseOdd += nums[i];
            }
        }

        return Math.max(houseEven,houseOdd);

    }
}
