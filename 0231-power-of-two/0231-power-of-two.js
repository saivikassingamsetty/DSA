/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let bin = n.toString(2);
    return bin == '1' + '0'.repeat(bin.length-1);
};