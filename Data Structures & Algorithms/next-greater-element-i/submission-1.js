class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const mapNums = new Map();

        for(let i=0;i<nums1.length;i++) {
            mapNums.set(nums1[i],i);
        }

        let res = new Array(nums1.length).fill(-1);

        let stack = [];

        for(let i=nums2.length-1;i>=0;i--) {
            if(mapNums.has(nums2[i])) {
                let index = mapNums.get(nums2[i]);
                while(stack.length > 0 && stack[stack.length-1]<nums2[i]) {
                    stack.pop();
                }
                if(stack.length > 0) {
                    res[index] = stack[stack.length-1];
                }
            }
            stack.push(nums2[i]);
        }

        return res;
    }
}
