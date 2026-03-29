class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let i = 1; 
        while(i < matrix.length) {
            if(target < matrix[i][0]) break;
            i++;
        }
        i--;

        console.log(i);

        for(let j=0;j<matrix[i].length;j++) {
            if(target == matrix[i][j]){
                return true;
            } else if(target < matrix[i][j]) {
                return false;
            }
        }
        return false;
    }
}
