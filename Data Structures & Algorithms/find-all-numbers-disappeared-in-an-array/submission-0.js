class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const checkNums = new Array(nums.length+1).fill(false);
        for(let num of nums) {
            checkNums[num] = true;
        }

        let res = [];
        for(let i=1;i<checkNums.length;i++) {
            if(!checkNums[i])   res.push(i)
        }

        return res;
    }
}
