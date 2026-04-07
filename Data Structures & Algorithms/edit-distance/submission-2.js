class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {

        const memo = {};

        function recursiveChange(i, j) {
            if(i >= word1.length) return word2.length - j;
            if(j >= word2.length) return word1.length - i;

            if(word1[i] == word2[j]) return recursiveChange(i+1,j+1);

            let key = i + ',' + j;
            if(memo[key] !== undefined) return memo[key];

            memo[key] = Math.min(
                1 + recursiveChange(i+1, j),    // DELETE
                1 + recursiveChange(i, j+1),    // ADD
                1 + recursiveChange(i+1, j+1)   // REPLACE
            );
            return memo[key];
        }

        return recursiveChange(0,0);
    }
}
