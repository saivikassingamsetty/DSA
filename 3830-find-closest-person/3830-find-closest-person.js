/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
    let t1 = Math.abs(x - z);
    let t2 = Math.abs(y - z);
    return (t1 < t2 ? 1 : (t1 > t2 ? 2 : 0));
};