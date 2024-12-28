/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => {
        if (a[0] > b[0]) return 1;
        else if (a[0] < b[0]) return -1;
        else {
            if (a[1] < b[1]) return -1;
            else return 1;
        }
    });

    let res = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= res[res.length-1][1]) {
            res[res.length-1][1] = Math.max(intervals[i][1], res[res.length-1][1]);
        } else {
            res.push(intervals[i]);
        }
    }

    return res;
};