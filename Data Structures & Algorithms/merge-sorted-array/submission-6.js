class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let tmpNums1 = [...nums1];
        let pointerNums1 = 0;
        let pointerNums2 = 0;

        for(let i=0;i<m+n;i++) {
            if((tmpNums1[pointerNums1] < nums2[pointerNums2] && pointerNums1 < m) || (pointerNums2 >= n)) {
                nums1[i] = tmpNums1[pointerNums1];
                pointerNums1++;
            } else {
                nums1[i] = nums2[pointerNums2];
                pointerNums2++;
            }
        }
    }
}
