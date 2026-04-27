class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {

        let tmpNums = [];
        for(let num of nums) {
            if(num !== val){
                tmpNums.push(num);
            } 
        }

        for(let i=0;i<tmpNums.length;i++) {
            nums[i] = tmpNums[i];
        }

        return tmpNums.length;
    }
}
