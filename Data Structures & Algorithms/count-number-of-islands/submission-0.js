class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        function removeAllConnectedLands(i,j) {
            if(i<ROWS && i>=0 && j<COLS && j>=0 && grid[i][j] == "1" && !visited.has(i+"-"+j)) {
                grid[i][j] = "0";
                visited.add(i+"-"+j);
                removeAllConnectedLands(i+1,j);
                removeAllConnectedLands(i-1,j);
                removeAllConnectedLands(i,j+1);
                removeAllConnectedLands(i,j-1);
            }
        }

        const ROWS = grid.length;
        const COLS = grid[0].length;
        const visited = new Set();

        let counter = 0;

        for(let i=0;i<ROWS;i++){
            for(let j=0;j<COLS;j++) {
                if(grid[i][j] == "1") {
                    counter++;
                    removeAllConnectedLands(i,j);
                }
            }
        }

        return counter;
    }
}
