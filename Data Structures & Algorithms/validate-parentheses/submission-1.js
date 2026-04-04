class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const conversion = new Map();
        conversion.set("(",")");
        conversion.set("[","]");
        conversion.set("{","}");

        const stack = [];

        for(let i=0;i<s.length;i++) {
            if(conversion.has(s[i])) {
                stack.push(s[i]);
            } else {
                let el = stack.pop();
                if(s[i] !== conversion.get(el))   return false;
            }
        }

        return stack.length==0;
    }
}
