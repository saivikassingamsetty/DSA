/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let i = 0;
    let j = 0;
    let count = 0;
    let m = matrix.length;
    let n = matrix[0].length;
    let direction = 'r';
    let res = [];
    let items = m * n;
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = m - 1;

    while (count < items) {
        //push element to res
        res.push(matrix[i][j]);
        count++;

        //next step
        if (direction === 'r') {
            if (j === right) {
                direction = 'd';
                top++;
                i++;
            } else {
                j++;
            }
        }
        else if (direction === 'd') {
            if (i === bottom) {
                direction = 'l';
                right--;
                j--;
            } else {
                i++;
            }
        }
        else if (direction === 'l') {
            if (j === left) {
                direction = 'u';
                bottom--;
                i--;
            } else {
                j--;
            }
        }
        else {
            if (i === top) {
                direction = 'r';
                left++;
                j++;
            } else {
                i--;
            }
        };
    }

    return res;
};