class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let resXor = 0;
        for (const num of nums) {
            resXor ^= num;
        }
        return resXor;
    } 
}
