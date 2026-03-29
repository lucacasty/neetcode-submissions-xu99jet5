class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0;
        let end = nums.length-1;

        while(start !== end) {
            let mid = Math.round((end-start)/2) + start;
            if(target == nums[mid]) {
                return mid;
            } else {
                if(target > nums[mid]) {
                    start = mid+1;
                } else {
                    end = mid-1;
                }
            }
        }

        return (nums[start] == target ? start : -1);
    }
}
