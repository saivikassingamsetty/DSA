/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
    let count = new Set();
    for (let j = 0; j < matrix.length; j++) {
        count.clear();
        for (let i = 0; i < matrix.length; i++) {
            count.add(matrix[i][j]);
        }
        if (count.size != matrix.length) return false;
    }

    let a = matrix[0].sort((a, b) => a - b).join(' ');

    return matrix.every(i => i.sort((a, b) => a - b).join(' ') == a);
};