class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minimumDeletions(s) {
        let deletions = 0,
            bs = 0;
        for (const c of s) {
            if (c === 'b') bs++;
            else deletions = Math.min(deletions + 1, bs);
        }
        return deletions;
    }
}