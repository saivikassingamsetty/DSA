/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    //replace the first row and first col values with 0 if the row/column has 0

    const firstCellIsZero = matrix[0][0] === 0;
    let firstRowHasZero = false;
    let firstColHasZero = false;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                if (i == 0) firstRowHasZero = true;
                if (j == 0) firstColHasZero = true;
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (!matrix[0][j] || !matrix[i][0]) matrix[i][j] = 0;
        }
    }

    if (firstCellIsZero || firstColHasZero) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }

    if (firstCellIsZero || firstRowHasZero) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0;
        }
    }

};