class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {

        const res = [];
        const nums = [];

        function backtrack(start) {
            if(nums.length == k) {
                res.push([...nums]);
                return;
            }

            for(let i=start;i<=n;i++) {

                nums.push(i);
                backtrack(i+1);
                nums.pop();
            }

        }

        backtrack(1);

        return res;

    }
}
