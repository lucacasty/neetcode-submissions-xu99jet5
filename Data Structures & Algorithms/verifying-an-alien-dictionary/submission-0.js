class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        if(words.length == 1) return true;

        const charPosition = new Map();
        for(let i=0;i<order.length;i++) {
            charPosition.set(order[i],i);
        }

        console.log(charPosition);

        for(let i=1;i<words.length;i++) {
            let j=0;
            while(j<Math.max(words[i-1].length,words[i].length)) {

                if(words[i-1][j] !== words[i][j]) {
                    if((charPosition.get(words[i-1][j]) || 0) > (charPosition.get(words[i][j]) || 0)) {
                        return false;
                    } else {
                        break;
                    }
                }

                j++;
            }
        }

        return true;
    }
}
