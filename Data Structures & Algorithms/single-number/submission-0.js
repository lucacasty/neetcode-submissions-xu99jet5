class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        const setNums = new Set([...nums]);
        const newSet = new Set();
        for(let num of nums) {
            if(newSet.has(num)) {
                setNums.delete(num)
            } else {
                newSet.add(num)
            }
        }
        return [...setNums][0];
    }
}
