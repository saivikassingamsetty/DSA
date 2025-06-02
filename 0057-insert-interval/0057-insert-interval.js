/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let res = [];
    let i = 0;

    //Insert old
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i++])
    }

    //Insert
    res.push(newInterval);

    //Merge
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        res[res.length - 1][0] = Math.min(res[res.length - 1][0], intervals[i][0]);
        res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1]);
        i++;
    }

    //Insert Remaining
    while (i < intervals.length) {
        res.push(intervals[i++])
    }

    return res;
};