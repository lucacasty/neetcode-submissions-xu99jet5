class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const directions = [[0,1],[0,-1],[1,0],[-1,0]];

        let perimeter = 0;

        for(let i=0;i<ROWS;i++) {
            for(let j=0;j<COLS;j++) {
                if(grid[i][j] == 1) {
                    perimeter += countPerimeter(i,j);
                }
            }
        }

        return perimeter;


        function countPerimeter(i,j) {
            let per = 0;
            for(let [r,c] of directions) {
                let row = i+r;
                let col = j+c;
                if(row < 0 || row >= ROWS || col<0 || col>=COLS || grid[row][col] == 0){
                    per++;
                }
            }

            return per;
        }
    }
}
