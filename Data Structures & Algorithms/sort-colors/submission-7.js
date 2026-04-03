class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */

    sortColors(nums) {
        let start = 0;
        let end = nums.length-1;

        for(let i=0;i<=end;i++) {
            if(nums[i] == 0) {
                let temp = nums[start];
                nums[start] = nums[i];
                nums[i] = temp;
                start++;
            } else if(nums[i] == 2) {
                let temp = nums[end];
                nums[end] = nums[i];
                nums[i] = temp;
                end--;
                i--;
            }
        }
    }

    /*sortColors(nums) {
        for(let i=0;i<nums.length;i++) {
            let min = Infinity;
            let indexMin = i;
            let j=i;
            while(j<nums.length) {
                if(nums[j] < min) {
                    min = nums[j];
                    indexMin = j;
                }
                j++;
            }
            let temp = nums[i];
            nums[i] = nums[indexMin];
            nums[indexMin] = temp;
        }
    }*/
}
