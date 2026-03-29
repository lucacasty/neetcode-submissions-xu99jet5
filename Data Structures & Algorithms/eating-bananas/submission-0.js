class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        piles.sort((a,b) => b-a);
        let divisor = Math.floor(h/piles.length);
        return piles[0]/divisor;
    }
}
