class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let nums1Pointer = m-1;
        let nums2Pointer = n-1;

        for(let i = m+n-1;i>=0;i--) {
            if(nums1[nums1Pointer] > nums2[nums2Pointer] || nums2Pointer < 0) {
                nums1[i] = nums1[nums1Pointer];
                nums1Pointer--;
            } else {
                nums1[i] = nums2[nums2Pointer];
                nums2Pointer--;
            }
        }
    }
}
