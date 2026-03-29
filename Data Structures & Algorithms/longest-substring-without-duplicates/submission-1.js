class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let map = new Map();

        let left = 0;
        let maxCount = 0;

        for(let right=0;right<s.length;right++) {
            if(!map.has(s[right])) {
                map.set(s[right],right);
                maxCount = Math.max(right - left + 1, maxCount);
            } else {
                left = map.get(s[right])+1;
                map.set(s[right],right);
            }
        }

        return maxCount;
    }
}
