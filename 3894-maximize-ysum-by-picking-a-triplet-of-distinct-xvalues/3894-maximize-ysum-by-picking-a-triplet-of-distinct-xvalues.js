/**
 * @param {number[]} x
 * @param {number[]} y
 * @return {number}
 */
var maxSumDistinctTriplet = function (x, y) {
    let [a, b, c] = [0, 0, 0];
    let [i1, i2, i3] = [0, 0, 0];

    for (let i = 0; i < x.length; i++) {
        if (x[i] == i1) a = Math.max(a, y[i])
        else if (x[i] == i2) b = Math.max(b, y[i])
        else if (x[i] == i3) c = Math.max(c, y[i])
        else if (y[i] > a || y[i] > b || y[i] > c) {
            minI = Math.min(a, b, c);
            if (minI == a) [a, i1] = [y[i], x[i]]
            else if (minI == b) [b, i2] = [y[i], x[i]]
            else[c, i3] = [y[i], x[i]]
        }
    }

    return ((!a || !b || !c) ? -1 : a + b + c);
};