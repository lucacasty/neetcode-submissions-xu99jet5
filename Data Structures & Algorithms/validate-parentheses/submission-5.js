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
                if(stack.length == 0 || s[i] !== conversion.get(stack.pop()))   return false;
            }
        }

        return stack.length==0;
    }
}
