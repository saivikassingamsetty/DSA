/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (i * i <= n) count++
        else break
    }

    return count;
};