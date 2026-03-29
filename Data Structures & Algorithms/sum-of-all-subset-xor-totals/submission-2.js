class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {

        let res = 0;
        let sub = [];

        function backtrack(start){

            let xorr = 0;
            for (let num of sub) xorr ^= num;
            res += xorr;

            for(let i=start;i<nums.length;i++) {
                sub.push(nums[i])
                backtrack(i+1);
                sub.pop();
            }
        }

        backtrack(0);
        return res;
    }
}
