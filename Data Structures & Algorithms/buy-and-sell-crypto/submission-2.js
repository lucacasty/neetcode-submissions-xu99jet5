class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    /*
    Check max difference
    */
    maxProfit(prices){

        let maxDifference = 0;
        let minPrice = Infinity;

        for(let price of prices) {
            if(price < minPrice) {
                minPrice = price;
            }
            maxDifference = Math.max((price-minPrice),maxDifference); 
        }

        return maxDifference;

    }
}
