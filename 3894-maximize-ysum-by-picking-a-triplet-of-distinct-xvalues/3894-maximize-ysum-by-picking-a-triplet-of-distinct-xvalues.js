/**
 * @param {number[]} x
 * @param {number[]} y
 * @return {number}
 */
var maxSumDistinctTriplet = function (x, y) {
    let map = {};

    for (let i = 0; i < x.length; i++) {
        map[x[i]] = Math.max((map[x[i]] ?? -Infinity), y[i]);
    }

    let values = Object.values(map);
    if (values.length < 3) return -1;

    values.sort((a, b) => b - a);
    return values[0] + values[1] + values[2];
};