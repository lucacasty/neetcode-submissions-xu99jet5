class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        const lengthX = matrix[0].length-1;
        const lengthY = matrix.length-1;

        let startY = 0;
        let endY = lengthY;

        let foundY = null;

        while (startY <= endY) {
            let y = Math.floor((endY - startY) / 2) + startY;

            if (target >= matrix[y][0] && target <= matrix[y][lengthX]) {
                foundY = y;
                break;
            } else if (target > matrix[y][0]) {
                startY = y + 1;
            } else {
                endY = y - 1;
            }
        }

        if (foundY === null) return false;

        let startX = 0;
        let endX = lengthX;
        
        while(startX !== endX) {
            let x = Math.floor(((endX - startX) / 2)) + startX;
            if(target > matrix[foundY][x]) {
                startX = x+1;
            } else {
                endX = x;
            }
        }

        return (matrix[foundY][startX] == target);
        
        
        
        
        
        
        
        /*let i = 1; 
        while(i < matrix.length) {
            if(target < matrix[i][0]) break;
            i++;
        }
        i--;

        for(let j=0;j<matrix[i].length;j++) {
            if(target == matrix[i][j]){
                return true;
            } else if(target < matrix[i][j]) {
                return false;
            }
        }
        return false;*/        
    }
}
