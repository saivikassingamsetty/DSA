/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let i = 1;

    while (i*i < num) i++;

    return i*i == num;
};