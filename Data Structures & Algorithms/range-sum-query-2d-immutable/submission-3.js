class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.matrix = matrix;

        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        this.savedCubes = Array.from({ length: ROWS+1 }, () =>
            Array(COLS+1).fill(0)
        );

        this.savedCubes[ROWS-1][COLS-1] = this.matrix[ROWS-1][COLS-1];

        for(let i=ROWS-1;i>=0;i--) {
            for(let j=COLS-1;j>=0;j--) {
                this.savedCubes[i][j] = this.matrix[i][j] + this.savedCubes[i][j+1] + this.savedCubes[i+1][j] - this.savedCubes[i+1][j+1];
            }
        }

        console.log(this.savedCubes);
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        return this.savedCubes[row1][col1] - this.savedCubes[row1][col2+1] - this.savedCubes[row2+1][col1] + this.savedCubes[row2+1][col2+1];
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
