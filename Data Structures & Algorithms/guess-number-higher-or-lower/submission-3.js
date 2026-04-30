/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let left = 1;
        let right = n;
        let mid = 0;
        do {
            mid = Math.floor((right-left)/2) + left;
            switch(guess(mid)) {
                case 0:
                    return mid;
                    break;
                case 1:
                    left = mid+1;
                    break;
                case -1:
                    right = mid-1;
                    break;
            }
        } while(left < right);

        return left;
    }
}
