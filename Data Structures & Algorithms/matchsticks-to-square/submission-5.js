class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        const perimeter = matchsticks.reduce((a,b) => a+b);
        if(perimeter%4 !== 0) return false;
        const side = perimeter/4;

        let sides = new Array(4).fill(0);
        matchsticks.sort((a, b) => b - a);

        function backtrack(i) {

            if(i === matchsticks.length)  return true;

            for(let j=0;j<4;j++) {
                if (sides[j] + matchsticks[i] <= side) {
                    sides[j] +=  matchsticks[i];
                    if(backtrack(i+1) ) return true;
                    sides[j] -= matchsticks[i];
                }

                if (sides[j] === 0) break;
            }

            return false;
        }

        return  backtrack(0);
    }
}
