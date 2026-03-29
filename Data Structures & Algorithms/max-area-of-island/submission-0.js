class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let countIsland = 0;
        let maxCountIsland = 0;
        for(let i = 0;i<grid.length;i++) {
            for(let j=0;j<grid[i].length;j++) {
                searchNearIsland(i,j);
                maxCountIsland = Math.max(countIsland,maxCountIsland);
                countIsland = 0;
            }
        }

        function searchNearIsland(i,j) {
            if(j >= 0 && j<grid[0].length && i>=0 && i<grid.length && grid[i][j] == 1) {
                countIsland++;
                grid[i][j] = 0;
                searchNearIsland(i+1,j);
                searchNearIsland(i-1,j);
                searchNearIsland(i,j+1);
                searchNearIsland(i,j-1);
            }
        }
        

        return maxCountIsland;
    }
}
