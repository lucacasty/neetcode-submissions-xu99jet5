class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const goal = nums.length/3;  
        console.log(goal);
        const res = [];
        let count = 1;

        nums.sort((a,b) => a-b);
        nums.push(null);

        for(let i=1;i<nums.length;i++) {
            if(nums[i] === nums[i-1]) {
                count++;
            } else {
                if(count > goal) {
                    res.push(nums[i-1]);
                }
                count = 1;
            }
        }

        return res;
    }
}
