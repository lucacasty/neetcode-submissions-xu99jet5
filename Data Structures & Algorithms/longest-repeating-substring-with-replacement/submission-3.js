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
        let chars = new Set(s);

        let maxCount = 0;

        for(let char of chars) {
            for(let i = 0;i<s.length;i++) {
                if(s[i] == char) {
                    let count = 1;
                    let start = i;
                    let tmpK = k;
                    while(start<s.length && tmpK>0) {
                        if(s[start] !== char) {
                            tmpK--;
                        } 
                        count++;
                        start++;
                    }
                    maxCount = Math.max(maxCount,count);
                }
            }
        }

        return maxCount;
    }
}
