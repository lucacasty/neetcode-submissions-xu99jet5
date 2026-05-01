class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map();
        for(let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        let minCount = 0;
        let output = null;
        for(let [num,count] of map.entries()) {
            if(count > minCount) {
                minCount = count;
                output = num;
            }
        }

        return output;
    }
}
