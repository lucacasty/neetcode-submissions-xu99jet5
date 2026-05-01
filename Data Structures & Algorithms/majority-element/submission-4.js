class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map();
        const midLength = nums.length/2;

        for(let num of nums) {
            let count = (map.get(num) || 0) + 1;
            if(count > midLength)  return num;

            map.set(num,count);
        }
        
        return output;
    }
}
