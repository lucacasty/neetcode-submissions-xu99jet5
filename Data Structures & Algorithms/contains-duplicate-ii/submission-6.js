class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let set = new Set();

        for(let i=0;i<=k;i++) {
            if(set.has(nums[i])) return true;
            set.add(nums[i]);
        }

        for(let i=k+1;i<nums.length;i++) {
            set.delete(nums[i-k-1]);
            set.add(nums[i]);
            if(set.size <= k)  return true;
        }

        return false;
    }
}
