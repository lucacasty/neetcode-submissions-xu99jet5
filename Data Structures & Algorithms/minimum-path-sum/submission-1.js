class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let dp = Array.from({length: ROWS+1}, () => new Array(COLS+1).fill(0));
        
        for(let i=ROWS-1;i>=0;i--) {
            for(let j=COLS-1;j>=0;j--) {
                dp[i][j] = grid[i][j];
                if(i+1 < ROWS && j+1 < COLS) {
                    dp[i][j] += Math.min(dp[i+1][j],dp[i][j+1]);
                } else if(i+1<ROWS) {
                    dp[i][j] += dp[i+1][j];
                } else if(j+1<COLS) {
                    dp[i][j] += dp[i][j+1];
                }
            }
        }

        console.log(dp)

        return dp[0][0];
    }
}
