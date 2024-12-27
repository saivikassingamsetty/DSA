/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let twoPower = [1];

    for (let i = 0; i < 31; i++) {
        twoPower.push(twoPower[i] * 2)
    }

    let res = 0;

    for (let i = 0; i < 32; i++) {
        if (n & 1) {
            res += twoPower[31 - i];
        }
        n = n >>> 1;
    }

    return res >>> 0;
};