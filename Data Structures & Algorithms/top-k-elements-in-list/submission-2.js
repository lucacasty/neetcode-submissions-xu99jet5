class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const map = new Map()

        for(let i=0;i<nums.length;i++) {
            map.set(nums[i],(map.get(nums[i]) || 0)+1);
        }

        let arr = [...map].sort((a,b) => b[1] - a[1]);

        const res = [];
        for(let i=0;i<k;i++) {
            res.push(arr[i][0]);
        }

        return res;
    }
}
