/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;

    let reverse = 0;
    let copy = x;
    while (copy) {
        reverse = 10 * reverse + copy % 10;
        copy = Math.floor(copy / 10);
    }

    return reverse == x;
};