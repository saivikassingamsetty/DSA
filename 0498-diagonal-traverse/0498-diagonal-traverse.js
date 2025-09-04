/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    let res = {};

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (!res[i + j]) res[i + j] = [];
            if ((i + j) % 2 == 0) {
                res[i + j] = [mat[i][j], ...res[i + j]];
            } else {
                res[i + j].push(mat[i][j]);
            }
        }
    }

    return Object.values(res).flat();
};