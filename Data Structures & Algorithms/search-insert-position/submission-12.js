class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let left = 0;
        let right = nums.length-1;

        while(left < right) {
            let mid = Math.floor((right-left)/2) + left;
            console.log(mid);
            if(target > nums[mid]) {
                left = mid+1;
            } else {
                right = mid-1;
            }
        }

        console.log(left);
        console.log(right);

        return target > nums[left] ? left+1 : left;
    }
}
