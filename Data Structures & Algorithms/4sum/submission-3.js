class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        const res = [];
        const map = new Map();
        const set = new Set();

        for(let i=0;i<nums.length;i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        for(let i=0;i<nums.length;i++){
            map.set(nums[i],map.get(nums[i])-1);
            for(let j=0;j<nums.length;j++){
                if(j==i) continue;
                map.set(nums[j],map.get(nums[j])-1);
                for(let x=0;x<nums.length;x++) {
                    if(x==j || x==i)  continue;
                    map.set(nums[x],map.get(nums[x])-1);
                    let last = target - (nums[i] + nums[j] + nums[x]);
                    if(map.get(last) >= 1) {
                        let arr = [nums[i],nums[j],nums[x],last];
                        arr.sort((a,b) => a-b);
                        if(!set.has(arr.join(","))){
                            res.push(arr);
                            set.add(arr.join(","));
                        }
                    }
                    map.set(nums[x],(map.get(nums[x])+1));
                }
                map.set(nums[j],(map.get(nums[j])+1));
            }
            map.set(nums[i],(map.get(nums[i])+1));
        }
        return res;
    }
}
