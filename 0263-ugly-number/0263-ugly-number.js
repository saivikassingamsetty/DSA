/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
    if (!n) return false;
    
    while (n != 0 && n % 2 == 0) {
        n = Math.floor(n / 2);
    }
    while (n != 0 && n % 3 == 0) {
        n = Math.floor(n / 3);
    }
    while (n != 0 && n % 5 == 0) {
        n = Math.floor(n / 5);
    }

    return n == 0 || n == 1;
};