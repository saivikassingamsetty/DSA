/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
    // 1 - 1
    // 2 - 1 3 1
    // 3 - 1 3 5 3 1
    // 4 - 1 3 5 7 5 3 1

    // 2*(1 + 3 + 5) + 7
    // n + 0 + 2 + 4 + 6
    // n + 2( 0 + 1 + 2 + 3) - 2*n + 1
    // n- 1 * n-2 - n + 1 = n^2 -3n + 2 - n + 1 = n^2 - 4n + 3

    // 2*(n-1 + (n-2)*(n-3)) + 2*n - 1;
    // 2 * sum of odd numbers + big middle number
    return 2 * (n - 1) ** 2 + 2 * n - 1;
};