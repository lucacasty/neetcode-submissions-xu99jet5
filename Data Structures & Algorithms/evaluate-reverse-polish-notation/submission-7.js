class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        const op = new Set(["+","-","*","/"]);

        const stack = [];

        let res = 0;
        for(let i=0;i<tokens.length;i++) {
            if(!op.has(tokens[i])) {
                stack.push(parseInt(tokens[i]));
            } else {
                let num2 = stack.pop();
                let num1 = stack.pop();
                switch(tokens[i]) {
                    case "+":
                        res = num1 + num2;
                        break;
                    case "-":
                        res = num1 - num2;
                        break;
                    case "*":
                        res = num1 * num2;
                        break;
                    case "/":
                        res = num1 / num2;
                        if(res>0) {
                            res = Math.floor(res);
                        } else {
                            res = Math.ceil(res);
                        }
                        break;
                }
                stack.push(res);
            }
        }
        return stack[0];
    }
}
