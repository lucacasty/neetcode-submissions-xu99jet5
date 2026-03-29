class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const seen = new Set();
        while(n!==1) {
            const arr = n.toString();
            n = 0;
            for(let digit of arr){
                n += Math.pow(parseInt(digit),2);
            }
            if(seen.has(n)) {
                return false;
            }
            seen.add(n);
        }
        return true;
    }
}
