class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const ROWS = board.length;
        const COLS = board[0].length;

        for(let i=0;i<ROWS;i++) {
            let set = new Set();
            for(let j=0;j<COLS;j++) {
                if(board[i][j] == ".") continue;
                if(set.has(board[i][j])) return false;
                set.add(board[i][j]);
            }
        }

        for(let i=0;i<COLS;i++) {
            let set = new Set();
            for(let j=0;j<ROWS;j++) {
                if(board[j][i] == ".") continue;
                if(set.has(board[j][i])) return false;
                set.add(board[j][i]);
            }
        }

        for(let startRow=0;startRow<ROWS;startRow+=3) {
            for(let startCol=0;startCol<COLS;startCol+=3) {
                let set = new Set();
                for(let i=startRow;i<startRow+3;i++) {
                    for(let j=startCol;j<startCol+3;j++) {
                        if(board[j][i] == ".") continue;
                        if(set.has(board[j][i])) return false;
                        set.add(board[j][i]);
                    }
                }
            }
        }

        return true;
    }
}
