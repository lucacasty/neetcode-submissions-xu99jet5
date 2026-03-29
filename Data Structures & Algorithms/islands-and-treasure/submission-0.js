class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {

        let visited = new Set();

        function recursiveCheck(i,j){
            if(i<0 || i>=grid.length || j<0 || j>=grid[i].length || grid[i][j] == -1 || visited.has(i.toString()+"-"+j.toString())) {
                return Infinity;    //return max number
            }
            if(grid[i][j] == 0){
                return 0;
            } 
            visited.add((i.toString()+"-"+j.toString()));
            return Math.min((1+recursiveCheck(i+1,j)),(1+recursiveCheck(i-1,j)),(1+recursiveCheck(i,j+1)),(1+recursiveCheck(i,j-1)));
        }

        for(let i=0;i<grid.length;i++) {
            for(let j=0;j<grid[i].length;j++) {
                if(grid[i][j] == 2147483647) {
                    visited = new Set();
                    grid[i][j] = recursiveCheck(i,j);
                }
            }
        }

        return grid;
    }
}
