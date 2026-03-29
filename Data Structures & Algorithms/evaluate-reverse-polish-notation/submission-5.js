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
                console.log(stack);
                let num2 = stack.pop();
                let num1 = stack.pop();
                console.log(num1);
                console.log(tokens[i]);
                console.log(num2);
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
                console.log(res);
                stack.push(res);
            }
        }
        if(stack.length > 0) {
            res = stack.pop();
        }
        return res;
    }
}
