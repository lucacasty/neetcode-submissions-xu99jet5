class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {

        const ROWS = board.length;
        const COLS = board[0].length;
        const WORD_LENGTH = word.length;

        const directions = [[0,+1],[0,-1],[+1,0],[-1,0]];

        function backtrack(i,j,wordIndex){
            if(wordIndex == WORD_LENGTH) {
                return true;
            }
            if(i<0 || i>=ROWS || j<0 || j>=COLS || board[i][j] !== word[wordIndex]){
                return false;
            }

            const temp = board[i][j];
            board[i][j] = '#'; // segna come visitato

            for(const [r, c] of directions) {
                if(backtrack(i + r, j + c, wordIndex + 1)) return true;
            }

            board[i][j] = temp; // ripristina il valore
            return false;

        }

        for(let i=0;i<ROWS;i++) {
            for(let j=0;j<COLS;j++) {
                if(board[i][j] == word[0]){
                    if(backtrack(i,j,0))    return true;
                }
            }
        }
        return false;
    }
}

