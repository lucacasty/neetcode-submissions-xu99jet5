class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const queue = [];

        let countFresh = 0;

        for(let i=0;i<ROWS;i++) {
            for(let j=0;j<COLS;j++) {
                if(grid[i][j] == 2) {
                    queue.push([i,j]);
                } else if(grid[i][j] == 1) {
                    countFresh++;
                }
            }
        }

        const directions = [[0,1],[0,-1],[1,0],[-1,0]];

        let countRounds = 0;

        while(countFresh > 0 && queue.length > 0) {
            let length = queue.length;
            for(let i=0;i<length;i++) {
                let [r,c] = queue.shift();
                for (const [dr, dc] of directions) {
                    const row = r + dr;
                    const col = c + dc;
                    if (
                        row >= 0 &&
                        row < ROWS &&
                        col >= 0 &&
                        col < COLS &&
                        grid[row][col] === 1
                    ) {
                        grid[row][col] = 2;
                        queue.push([row, col]);
                        countFresh--;
                    }
                }
            }
            countRounds++;
        }

        return countFresh > 0 ? -1 : countRounds;
    }
}
