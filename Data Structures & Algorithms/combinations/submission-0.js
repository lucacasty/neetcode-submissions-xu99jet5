class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {

        const res = [];
        const nums = [];

        let used = new Array(n+1).fill(false);

        function backtrack() {
            if(nums.length == k) {
                res.push([...nums]);
                return;
            }

            for(let i=1;i<=n;i++) {
                if(used[i] == true || nums[nums.length-1] > i) continue;

                nums.push(i);
                used[i] = true;
                backtrack();
                nums.pop();
                used[i] = false;
            }

        }

        backtrack();

        return res;

    }
}
