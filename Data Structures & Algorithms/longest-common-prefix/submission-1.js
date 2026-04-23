class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let countChar = 0;
        const mapChar = new Map();

        for(let i=0;i<strs[0].length;i++) {
            mapChar.set(i,strs[0][i]);
            countChar++;
        }

        for(let i=1;i<strs.length;i++) {
            let str = strs[i];
            let currentCount = 0;
            for(let j=0;j<str.length;j++) {
                if(mapChar.get(j) !== str[j]) {
                    mapChar.set(j,-1);
                    break;
                }
                currentCount++;
            }
            countChar = Math.min(countChar,currentCount);
        }

        return strs[0].slice(0,countChar);
    }
}
