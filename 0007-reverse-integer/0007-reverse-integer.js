/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const isNeg = x < 0;
    x = Math.abs(x);
    let reversed = 0;
    while (x) {
        reversed = reversed * 10 + x % 10;

        if ((reversed >= 2 ** 31 && !isNeg) || (reversed > 2 ** 31 && isNeg)) return 0;

        x = Math.floor(x / 10);
    }

    return (isNeg ? -1 : 1) * reversed;
};