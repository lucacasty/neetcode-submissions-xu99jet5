class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a,b) => a-b);
        const res = [];
        const map = new Map();

        for(let i=0;i<nums.length;i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        for(let i=0;i<nums.length;i++){
            if(i>0 && nums[i] === nums[i-1]) continue;
            map.set(nums[i],map.get(nums[i])-1);
            for(let j=i+1;j<nums.length;j++){
                if(j > i+1 && nums[j] === nums[j-1]) continue;
                map.set(nums[j],map.get(nums[j])-1);
                for(let x=j+1;x<nums.length;x++) {
                    if(x > j+1 && nums[x] === nums[x-1])  continue;

                    map.set(nums[x],map.get(nums[x])-1);
                    let last = target - (nums[i] + nums[j] + nums[x]);
                    if(map.get(last) >= 1 && last>=nums[x]) {
                        res.push([nums[i],nums[j],nums[x],last]);
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
