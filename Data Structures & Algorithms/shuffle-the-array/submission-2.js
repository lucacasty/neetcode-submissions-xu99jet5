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
        for(let i=0;i<n;i++) {
            //adding first half
            res[2*i] = nums[start];
            
            //adding second half
            res[2*i+1] = nums[start+n];

            start++;
        }

        //returning result
        return res;
    }
}
