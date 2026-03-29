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
        console.log(this.k)
        console.log(this.nums)
        console.log(this.nums[this.k-1])
        return this.nums[this.k-1];
    }
}
