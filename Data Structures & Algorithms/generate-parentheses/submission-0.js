class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [];
        let str = [];
        function generateRecursive(open,close,stack){
            if(open == close && open == n){
                result.push(stack);
                return;
            }
            if(open < n) {
                generateRecursive(open+1,close,stack+"(");
            }

            if(close < open) {
                generateRecursive(open,close+1,stack+")");
            }

        }
        generateRecursive(0,0,'');
        return result;
    }
}
