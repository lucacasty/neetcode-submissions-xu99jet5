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
        //search index of target or near target
        let start = 0;
        let end = numbers.length-1;
        while(start<end) {
            let mid = Math.floor((end-start)/2)+start;
            if(numbers[mid] > target) {
                end = mid-1;
            } else {
                start = mid+1;
            }
        }

        start = 0;
        let newEnd = end;
        for(let i=0;i<end;i++) {
            if(numbers[start]+numbers[newEnd] == target) {
                return [start+1,newEnd+1];
            }

            if(Math.abs(numbers[start])+Math.abs(numbers[newEnd]) > target) {
                newEnd--;
            } else {
                start++;
            }
        }
    }
}
