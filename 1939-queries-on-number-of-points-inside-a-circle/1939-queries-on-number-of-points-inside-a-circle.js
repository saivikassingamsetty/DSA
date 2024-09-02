/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
    return queries.map(([x, y, r]) =>
points.filter(([i, j]) =>(i - x) ** 2 + (j - y) ** 2 <= r ** 2).length);
};