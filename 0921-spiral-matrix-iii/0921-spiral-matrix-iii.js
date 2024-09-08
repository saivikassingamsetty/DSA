/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */

var spiralMatrixIII = function (rows, cols, rStart, cStart) {
    let res = [[rStart, cStart]];
    const isValid = (i, j) => i >= 0 && i < rows && j >= 0 && j < cols;
    let steps = 0;
    //2 pointers for traversing (ghost pointers)
    [r, c] = [rStart, cStart];
    direction = 0;

    while (res.length < rows * cols) {
        //update steps for right and left
        if (direction == 0 || direction == 2) steps++;

        //move step points
        for (let i = 0; i < steps; i++) {
            //update pointers
            if (direction == 0) c++;
            else if (direction == 1) r++;
            else if (direction == 2) c--;
            else r--;

            //trace the points
            if (isValid(r, c)) res.push([r, c]);
        }

        //update direction
        direction = (direction + 1) % 4;
    }

    return res;
};
