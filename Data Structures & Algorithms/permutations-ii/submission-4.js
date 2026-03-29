class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        const res = new Set();
        const perm = [];

        let used = new Array(nums).fill(false);

        function backtrack(){
            if(nums.length == perm.length) {
                res.add(JSON.stringify(perm));
                return;
            }

            for(let i=0;i<nums.length;i++) {
                if(used[i] == true) continue;
                perm.push(nums[i]);
                used[i] = true;
                backtrack();
                perm.pop();
                used[i] = false;
            }
        }

        backtrack();
        return Array.from(res).map(a => JSON.parse(a));
    }
}
