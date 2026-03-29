class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const setNums = new Set([...nums]);

        const seen = new Set();

        let maxCount = 0;

        for(let num of nums) {
            if(!seen.has(num)) {
                seen.add(num);
                let count = 1;
                num++;
                while(setNums.has(num)) {
                    count++;
                    num++;
                    seen.add(num);
                }
                maxCount = Math.max(maxCount,count);
            }
        }

        return maxCount;
    }
}
