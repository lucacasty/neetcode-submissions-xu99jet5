class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let maxStep = 1;
        for(let i=0;i<nums.length-1;i++) {
            maxStep --;
            maxStep = Math.max(maxStep,nums[i]);
            if(maxStep <= 0) return false;
        }
        return (maxStep >= 1);
    }
}
