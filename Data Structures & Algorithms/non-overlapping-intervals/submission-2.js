class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a,b) => a[0]-b[0]);

        let count = 0;
        let intervalToCheck = intervals[0];

        for(let i=1;i<intervals.length;i++) {
            if(intervals[i][0] >= intervalToCheck[0] && intervals[i][0] < intervalToCheck[1]) {
                count ++;
                if(intervals[i][1] < intervalToCheck[1]) {
                    intervalToCheck = intervals[i];
                }
            } else {
                intervalToCheck = intervals[i];
            }
        }

        return count;
    }
}
