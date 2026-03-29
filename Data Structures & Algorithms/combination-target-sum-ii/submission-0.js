class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {

        const res = new Set();
        const comb = [];

        candidates.sort((a,b) => a-b);

        let used = new Array(candidates.length).fill(false);

        function backtrack(start,sum) {
            if(sum > target) return;
            if(sum == target) {
                res.add(JSON.stringify(comb));
                return;
            }

            for(let i=start;i<candidates.length;i++) {
                if(used[i] == true) continue;
                comb.push(candidates[i]);
                used[i] = true;
                backtrack(i+1,sum+candidates[i]);
                comb.pop();
                used[i] = false;
            }
        }
        backtrack(0,0);

        return Array.from(res).map(a=>JSON.parse(a));
    }
}
