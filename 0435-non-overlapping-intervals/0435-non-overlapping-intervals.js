/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1]);

    let lastEnd = intervals[0][1];
    let count = 0;
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < lastEnd) count++
        else lastEnd = intervals[i][1];
    }

    return count;
};