class Solution {
    /**
     * @param {number[]} nums
     * @param {number} n
     * @return {number[]}
     */
    shuffle(nums, n) {
        var a = [];
        for(var i = 0;i < n;i++){
            a.push(nums[i]);
            a.push(nums[n+i]);
        }
        return a;
    }
}
