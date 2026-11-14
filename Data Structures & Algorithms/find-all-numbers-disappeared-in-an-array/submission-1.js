class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const set = new Set();
        for(let i=0;i<nums.length;i++) {
            set.add(i+1);
        }

        for(let num of nums) {
            set.delete(num);
        }

        return [...set];
    }
}
