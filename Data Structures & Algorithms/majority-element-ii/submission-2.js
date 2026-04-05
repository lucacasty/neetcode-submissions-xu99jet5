class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const goal = nums.length/3;  

        const res = [];
        const map = new Map();

        for(let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for(let [num,count] of map) {
            if(count > goal) {
                res.push(num);
            }
        }

        return res;
    }
}
