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
        let tmpMap = new Map();

        let counter = 0;
        let windowEnd = 0;

        while(windowEnd < s1.length) {
            tmpMap.set(s2[windowEnd], (tmpMap.get(s2[windowEnd]) || 0) + 1);
            if (countChars.has(s2[windowEnd])) {
                if(tmpMap.get(s2[windowEnd]) === countChars.get(s2[windowEnd])) counter++;
                else if(tmpMap.get(s2[windowEnd]) === countChars.get(s2[windowEnd]) + 1) counter--;
            }
            windowEnd++;
        }

        if(counter == needed)   return true;

        for(let i=windowEnd;i<s2.length;i++) {
            let addChar = s2[i];
            let removeChar = s2[i - windowEnd];

            // ADD
            tmpMap.set(addChar, (tmpMap.get(addChar) || 0) + 1);
            if (countChars.has(addChar)) {
                if(tmpMap.get(addChar) === countChars.get(addChar)) counter++;
                else if(tmpMap.get(addChar) === countChars.get(addChar) + 1) counter--;
            }

            // REMOVE
            if (countChars.has(removeChar)) {
                if(tmpMap.get(removeChar) === countChars.get(removeChar)) counter--;
                else if(tmpMap.get(removeChar) === countChars.get(removeChar) + 1) counter++;
            }

            tmpMap.set(removeChar, tmpMap.get(removeChar) - 1);

            if(counter == needed)   return true;
        }

        return counter == needed;
    }
}
