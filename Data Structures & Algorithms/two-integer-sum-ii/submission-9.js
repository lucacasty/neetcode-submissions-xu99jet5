class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */

    /* 
    [1,2,3] => 3
    [2,3,4] => 6

    Solutions:
    
    BRUTE FORCE:
    - For every element starting with first, search in the next elements target - nums[0]   O(n*log (n)) -> should finish first if i return when i find 

    SET:
    - Scan of the array, save elements, search in the set (target - nums[i]), if found i have my numbers

    

    */
    twoSum(numbers, target) {

        let start = 0;
        let newEnd = numbers.length-1;
        while(start <= newEnd) {
            if(numbers[start]+numbers[newEnd] == target) {
                return [start+1,newEnd+1];
            }

            if(numbers[start]+numbers[newEnd] > target) {
                newEnd--;
            } else {
                start++;
            }
        }
    }
}
