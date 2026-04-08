class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0;
        let end = nums.length-1;

        while(start <= end) {
            console.log(start)
            console.log(end)
            let mid = Math.floor((end-start)/2) + start;
            console.log(mid)
            if(nums[mid] == target)     return mid;
            if((nums[start] < nums[mid] && target >= nums[start] && target < nums[mid]) || (nums[start] > nums[mid] && (target >= nums[start] || target < nums[mid]))) {
                end = mid-1;
            } else {
                start = mid+1;
            }
        }

        return -1;
    }
}
