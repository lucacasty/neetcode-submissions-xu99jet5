class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {

        const res = [];
        const comb = [];

        candidates.sort((a,b) => a-b);

        function backtrack(start,sum) {
            if(sum > target) return;
            if(sum == target) {
                res.push(comb);
                return;
            }

            for(let i=start;i<candidates.length;i++) {
                if(i>0 && candidates[i] == candidates[i-1]) continue;
                comb.push(candidates[i]);
                backtrack(i+1,sum+candidates[i]);
                comb.pop();
            }
        }
        backtrack(0,0);

        return res;
    }
}
