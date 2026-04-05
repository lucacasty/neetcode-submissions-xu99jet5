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

        for(let i=0;i<s2.length;i++) {
            if(countChars.has(s2[i])) {
                let tmpMap = new Map(countChars);
                let j = i;
                while(j < s2.length && (tmpMap.get(s2[j]) || 0) > 0 && j-i < s1.length) {
                    tmpMap.set(s2[j], (tmpMap.get(s2[j]) || 0) - 1);
                    j++;
                }

                let counter = 0;
                for(let [char,count] of tmpMap) {
                    counter = Math.max(count,counter);
                } 
                if(counter == 0) return true;
            }
        }

        return false;
    }
}
