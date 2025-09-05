/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let maxK = Math.floor(Math.log(2**31 - 1) / Math.log(3));

    return n > 0 && 3**maxK % n === 0;
};