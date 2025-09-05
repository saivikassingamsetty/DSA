/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (!n) return false;

    while (n) {
        if (n == 1) return true; //3 ^ 0
        if (n%3) return false;
        n/=3;
    }

    return true;
};