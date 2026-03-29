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
        let maxPrice = 0;
        let minPrice = Infinity;

        for(let price in prices) {
            if(price < minPrice) {
                minPrice = price;
                maxPrice = 0;
            } else if(price > maxPrice) {
                maxPrice = price;
            }
            if(maxPrice > minPrice) {
                maxDifference = Math.max((maxPrice-minPrice),maxDifference);
            }   
        }

        console.log(maxPrice);
        console.log(minPrice);

        return maxDifference;

    }
}
