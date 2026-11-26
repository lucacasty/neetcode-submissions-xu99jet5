class Solution {
    /**
     * @param {number[]} nums
     * @param {number} n
     * @return {number[]}
     */
    shuffle(nums, n) {
        //Creating a new array
        let res = new Array(nums.length);

        //Index from start and from mid
        let start = 0;

        //Cycling nums.length/2 or n times and updating new array
        for(let i=0;i<nums.length;i++) {
            //adding first half
            res[i] = nums[start];
            i++;
            
            //adding second half
            res[i] = nums[start+n];

            start++;
        }

        //returning result
        return res;
    }
}
