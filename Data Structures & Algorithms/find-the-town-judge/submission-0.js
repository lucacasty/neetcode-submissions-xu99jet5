class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        let judge = -1;
        const map = new Map();

        for(let [vote,trusted] of trust) {
            map.set(vote,(map.get(vote) || 0) - Infinity);  //invalid person
            map.set(trusted,(map.get(trusted) || 0) + 1);  //invalid person
        }

        console.log(map);

        for(let [jud,count] of map.entries()) {
            if(count == n-1) judge = jud;
        }


        return judge;
    }
}
