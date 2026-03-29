class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {

        function recursiveStep(i) {
            if(i >= cost.length) return 0;

            return cost[i] + Math.min(recursiveStep(i + 1),recursiveStep(i + 2));

        }

        return Math.min(recursiveStep(0),recursiveStep(1));
    }
}
