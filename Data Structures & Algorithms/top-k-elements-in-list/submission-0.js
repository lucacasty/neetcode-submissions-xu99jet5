class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let lastNum = nums[0];
        let count = 1;

        const res = [];

        for(let i=1;i<nums.length;i++) {
            if(nums[i] == lastNum) {
                count++;
            } else {
                if(count>=k) {
                    res.push(lastNum);
                }
                count = 1;
                lastNum = nums[i];
            }
        }

        if(count >= k) res.push(lastNum);

        return res;
    }
}
