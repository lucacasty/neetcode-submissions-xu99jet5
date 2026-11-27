class Solution {
    /**
     * @param {number[]} nums
     * @param {number} n
     * @return {number[]}
     */
    shuffle(nums, n) {
        var a = new Array(nums.length);
        for(var i = 0;i < n;i++){
            a[2*i] = nums[i];
            a[2*i+1] = nums[n+i];
        }
        return a;
    }
}
