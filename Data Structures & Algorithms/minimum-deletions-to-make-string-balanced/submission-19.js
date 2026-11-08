class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minimumDeletions(s) {
        let countA = 0;
        let countB = 0;

        let finalCount = 0;

        const startIndex = s.indexOf("b");
        if(startIndex == -1)  return 0;

        for(let i=startIndex;i<s.length;i++) {
            if(s[i] == "a") {
                if(countB > 0 && countA > 0 && s[i-1] == "b") {
                    finalCount += Math.min(countA,countB);
                    console.log("A "+countA)
                    console.log("B "+countB)
                    console.log("Count "+finalCount)
                    countB = 0;
                    countA = 0;
                } else {
                    countA++;
                }
            } else {
                if(countB > 0 && countA > 0 && s[i-1] == "a") {
                    finalCount += Math.min(countA,countB);
                    console.log("A "+countA)
                    console.log("B "+countB)
                    console.log("Count "+finalCount)
                    countA = 0;
                    countB = 0;
                }
                countB++;
            }
        }

        if(s[s.length-1] == "a") {
            if(countA > 0 && countB > 0) {
                finalCount+=Math.min(countA,countB);
                console.log("A "+countA)
                console.log("B "+countB)
                console.log("Count "+finalCount)
            }
        }

        return finalCount;
    }
}
