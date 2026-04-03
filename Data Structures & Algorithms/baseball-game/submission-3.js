class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];

        let res = 0;

        for(let i=0;i<operations.length;i++) {
            switch(operations[i]) {
                case "+":
                    if(stack.length >= 2) {
                        const el = stack[stack.length-2]+stack[stack.length-1];
                        stack.push(el);
                        res += el;
                    }
                    break;
                case "C":
                    const el = stack.pop();
                    res -= el;
                    break;
                case "D":
                    if(stack.length >= 1) {
                        const el = 2*stack[stack.length-1];
                        stack.push(el);
                        res += el;
                    }
                    break;
                default:
                    stack.push(parseInt(operations[i]));
                    res += parseInt(operations[i]);
                    break;
            }
        }

        return res;
    }
}
