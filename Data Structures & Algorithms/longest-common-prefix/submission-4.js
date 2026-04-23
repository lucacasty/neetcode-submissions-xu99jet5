class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let countChar = strs[0].length;
        let firstStr = strs[0];
        for(let i=1;i<strs.length;i++) {
            let secondstr = strs[i];
            let currentCount = 0;
            for(let j=0;j<Math.min(firstStr.length,secondstr.length);j++) {
                if(firstStr[j] !== secondstr[j]) {
                    break;
                }
                currentCount++;
            }
            countChar = Math.min(countChar,currentCount);
        }

        return strs[0].slice(0,countChar);
    }
}
