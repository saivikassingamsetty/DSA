/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let q = dividend / divisor;
    if (q < (-2) ** 31) return (-2) ** 31;
    if (q > 2 ** 31 - 1) return 2 ** 31 - 1;

    if (q < 0) return Math.ceil(q);
    return Math.floor(q);
};