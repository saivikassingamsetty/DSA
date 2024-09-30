/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    return [...(x ^ y).toString(2)].filter(i => i != 0).length;
};