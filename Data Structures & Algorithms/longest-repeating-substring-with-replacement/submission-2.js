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

        const mapCountSameLetters = new Map();

        for(let char of s) {
            mapCountSameLetters.set(char, ((mapCountSameLetters.get(char) || 0) + 1));
        }

        let countSameLettersOrdered = [...mapCountSameLetters].sort((a,b) => b[1]-a[1]);

        console.log(countSameLettersOrdered);

        let maxCount = countSameLettersOrdered[0][1];

        for(let i=1;i<countSameLettersOrdered.length;i++) {
            maxCount = Math.max(maxCount,countSameLettersOrdered[0][1] + Math.min(k,countSameLettersOrdered[i][1]));
        }

        return maxCount;
    }
}
