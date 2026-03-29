class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.nums = nums.sort((a,b) => b-a);
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.nums.push(val);
        this.nums.sort((a,b) => b-a);
        console.log(this.nums);
        if(this.nums.length > 2) {
            return this.nums[2];
        } else if (this.length > 1){
            return this.nums[1];
        } else {
            return this.nums[0];
        }
    }
}
