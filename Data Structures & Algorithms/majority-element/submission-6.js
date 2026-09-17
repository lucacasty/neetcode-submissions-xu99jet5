class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map();

        for(let num of nums) {
            map.set(num,(map.get(num) || 0) + 1);
        }

        let max = -1;
        let numMax = -1;
        for(let [num,count] of map) {
            if(count > max) {
                max = count;
                numMax = num;
            }
        }

        return numMax;
    }
}
