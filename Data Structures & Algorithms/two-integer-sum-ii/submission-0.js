class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        for(let i=0;i<numbers.length-1;i++) {
            if(numbers[i]+numbers[i+1] == target) return [numbers[i],numbers[i+1]];
        }
    }
}
