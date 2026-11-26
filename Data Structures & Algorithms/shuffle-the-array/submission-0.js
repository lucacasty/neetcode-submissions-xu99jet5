class Solution {
    /**
     * @param {number[]} nums
     * @param {number} n
     * @return {number[]}
     */
    shuffle(nums, n) {
        //Creating a new array
        let res = new Array(nums.length);
        let j = 0;  //index of result array

        //Index from start and from mid
        let start = 0;
        let mid = n;

        //Cycling nums.length/2 or n times and updating new array
        for(let i=0;i<n;i++) {
            //adding first half
            res[j] = nums[start]
            j++;
            start++;
            
            //adding second half
            res[j] = nums[mid]
            j++;
            mid++;
        }

        //returning result
        return res;
    }
}
