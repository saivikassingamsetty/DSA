/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {
    let max = [];

    for (let i = 0; i < matrix[0].length; i++) {
        let _max = 0;
        for (let j = 0; j < matrix.length; j++) {
            _max = Math.max(_max, matrix[j][i]);
        }
        max.push(_max);
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == -1) {
                matrix[i][j] = max[j];
            }
        }
    }

    return matrix;
};