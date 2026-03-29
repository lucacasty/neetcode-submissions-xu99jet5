class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */

    partitionLabels(S) {

        const map = new Map();
        for(let i=0;i<S.length;i++) {
            map.set(S[i],i);
        }

        const result = [];

        for(let i=0;i<S.length;i++) {
            let lastIndex = map.get(S[i]);
            let j = i+1;
            while(j<lastIndex) {
                if(S[j] !== S[i]) {
                    lastIndex = Math.max(lastIndex,map.get(S[j]));
                }
                j++;
            }
            result.push(lastIndex-i+1);
            i += (lastIndex-i);
        }
        return result;
    }
}
