class Solution {
    /**
     * @param {number[]} candies
     * @param {number} k
     * @return {number}
     */
    maximumCandies(candies, k) {
        const totCandies = candies.reduce((sum,n) => sum+n,0);
        if(totCandies < k) return 0;
        if(totCandies == k) return 1;

        function checkCandies(candy) {
            let count = 0;
            for(let pileOfCandies of candies) {
                count+=Math.floor(pileOfCandies/candy);
            }
            return count;
        }

        let right = Math.floor(totCandies/k);
        let left = 0;
        let best = 0;

        while(left<=right){
            let mid = Math.floor((right-left)/2)+left;
            let count = checkCandies(mid);
            
            if(count >= k) {
                best = mid;
                left = mid+1;
            } else {
                right = mid-1;
            }
        }    

        return best;
    }
}
