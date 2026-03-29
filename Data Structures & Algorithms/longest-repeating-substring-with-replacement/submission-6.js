class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    /*
    XYYX, 2 => 4       (XXXX)
    AAABABB, 1 => 5    (AAAAABB)
    */
    characterReplacement(s, k) {
        let maxCount = 0;
        let map = new Map();
        let maxF = 0;

        let left = 0;

        for(let right = 0;right < s.length;right++) {
            //count Occurencies of s[right] in our window
            map.set(s[right], ((map.get(s[right]) || 0) + 1));
            maxF = Math.max(maxF,map.get(s[right]));

            while(right - left + 1 - maxF > k) {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }
            maxCount = Math.max(maxCount,right-left+1);
        }

        return maxCount;
    }
}
