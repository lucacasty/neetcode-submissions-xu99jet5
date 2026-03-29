class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n.length == 1) return 1;
        if(n.length == 2) return 2;

        let dp = new Array(n).fill(0);
        dp[0] = 1;
        dp[1] = 2;

        for(let i=2;i<n;i++){
            dp[i] = dp[i-2] + dp[i-1];
        }

        return dp[n-1];
    }
}
 