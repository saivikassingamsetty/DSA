/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {

    return n > 0 && ((Math.log(n)) / Math.log(2)) % 2 == 0;
};