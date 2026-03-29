class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let res = parseInt(tokens[0]);
        for(let i=2;i<tokens.length;i+=2) {
            switch(tokens[i]) {
                case "+":
                    res += parseInt(tokens[i-1]);
                    break;
                case "-":
                    res -= parseInt(tokens[i-1]);
                    break;
                case "*":
                    res = res * parseInt(tokens[i-1]);
                    break;
                case "/":
                    res = res / parseInt(tokens[i-1]); 
                    break;
            }
        }
        return res;
    }
}
