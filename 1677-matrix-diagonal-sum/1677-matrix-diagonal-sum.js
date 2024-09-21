/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let res = 0;
    let n = mat.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j || i == n-1-j) res += mat[i][j];
        }
    }

    return res;
};