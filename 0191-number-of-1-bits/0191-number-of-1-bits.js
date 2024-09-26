/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = 0;

    while (n) {
        if (n%2 != 0) res++;
        n = Math.floor(n/2);
    }

    return res;
};