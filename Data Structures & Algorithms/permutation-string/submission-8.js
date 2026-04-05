class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        const countChars = new Map();
        for(let char of s1) {
            countChars.set(char, (countChars.get(char) || 0) + 1);
        }

        const needed = countChars.size;

        for(let i=0;i<s2.length;i++) {
            if(countChars.has(s2[i])) {
                let tmpMap = new Map();
                let j = i;
                let counter = 0;
                while(j < s2.length && j-i < s1.length) {
                    tmpMap.set(s2[j], (tmpMap.get(s2[j]) || 0) + 1);
                    if(tmpMap.get(s2[j]) > (countChars.get(s2[j]) || 0))  break;
                    if(countChars.get(s2[j]) === tmpMap.get(s2[j])) {
                        counter++;
                    }
                    j++;
                }

                if(counter == needed) return true;
            }
        }

        return false;
    }
}
