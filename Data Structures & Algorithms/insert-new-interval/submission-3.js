class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        intervals.push(newInterval);
        intervals.sort((a,b) => a[0]-b[0]);

        let newIntervals = [];

        for(let i=0;i<intervals.length-1;i++){
            if(intervals[i+1][0] <= intervals[i][1]) {
                intervals[i + 1] = [
                    intervals[i][0],
                    Math.max(intervals[i][1], intervals[i + 1][1])
                ];
            } else {
                newIntervals.push(intervals[i]);
            }
        }

        newIntervals.push(intervals[intervals.length-1]);

        return newIntervals;
    }
}
