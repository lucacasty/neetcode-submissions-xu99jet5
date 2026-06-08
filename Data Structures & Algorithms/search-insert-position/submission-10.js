class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let left = 0;
        let right = nums.length-1;

        let res = nums.length;

        while(left <= right) {
            let mid = Math.floor((right-left)/2) + left;

            if(target > nums[mid]) {
                left = mid+1;
            } else if(target < nums[mid]) {
                res = mid;
                right = mid-1;
            } else {
                return mid;
            }
        }

        return res;
    }
}