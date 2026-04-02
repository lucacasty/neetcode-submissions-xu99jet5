class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while(stones.length > 1) {
            stones.sort((a,b)=>a-b);
            let firstStone = stones.pop();
            let secondStone = stones.pop();

            let res = firstStone-secondStone;
            if(res !== 0) {
                stones.push(res);
            }
        }

        return (stones.length > 0 ? stones[0] : 0);
    }
}
