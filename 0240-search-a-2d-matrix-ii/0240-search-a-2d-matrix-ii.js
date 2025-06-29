/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let [m, n] = [matrix.length, matrix[0].length];
    // start top right
    let i = 0;
    let j = n - 1;

    while (i < m && j >= 0) {
        if (matrix[i][j] == target) return true
        else if (matrix[i][j] < target) i++
        else j--
    }

    return false
};