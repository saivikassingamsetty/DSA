/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    const dist = ([x, y]) => x * x + y * y;

    return points.sort((a, b) => dist(a) - dist(b)).slice(0, k);
};