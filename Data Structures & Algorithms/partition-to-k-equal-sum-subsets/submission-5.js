class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums, k) {

        let totalSum = nums.reduce((a,b) => a+b,0);

        if(totalSum % k !== 0) return false;

        nums.sort((a, b) => b - a);

        let target = totalSum / k;
        let used = new Array(nums.length).fill(false);;

        function backtrack(j,k,sum){
            if(k==0)   return true;
            if(sum == target) {
                return backtrack(0,k-1,0);
            }

            for(let i=j;i<nums.length;i++) {
                if(used[i] || sum+nums[i] > target) continue;
                used[i] = true;
                if(backtrack(i+1,k,sum+nums[i])) return true;
                used[i] = false;
            }

            return false;
        }
        return backtrack(0,k,0);
    }
}
