class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let sumTot = 0;
        let sumShouldBe = nums.length;
        for(let i=0;i<nums.length;i++) {
            sumTot += nums[i];
            sumShouldBe += i;
        }
        return sumShouldBe - sumTot;
    }
}
