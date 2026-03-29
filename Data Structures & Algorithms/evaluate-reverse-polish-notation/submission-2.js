class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        const op = new Set(["+","-","*","/"]);

        const stack = [];

        let firstOp = true;

        let res = 0;
        for(let i=0;i<tokens.length;i++) {
            if(!op.has(tokens[i])) {
                stack.push(parseInt(tokens[i]));
            } else {
                console.log(stack);
                let num1 = res;
                let num2 = stack.pop();
                if(firstOp) {
                    firstOp = false;
                    num1 = stack.pop();
                }
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
                        res = Math.floor(num1 / num2);
                        break;
                }
                console.log(res);
            }
        }
        return res;
    }
}
