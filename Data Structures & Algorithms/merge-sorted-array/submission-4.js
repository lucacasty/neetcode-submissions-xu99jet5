class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let nums1Copy = [...nums1];
        let nums2Index = 0;
        let nums1Index = 0;
        for(let i=0;i<m+n;i++) {
            if(nums1Index < m && (nums1Copy[nums1Index]<nums2[nums2Index] || nums2Index >= n)) {
                nums1[i] = nums1Copy[nums1Index];
                nums1Index++;
            } else {
                nums1[i] = nums2[nums2Index];
                nums2Index++;
            }
        }
    }
}
