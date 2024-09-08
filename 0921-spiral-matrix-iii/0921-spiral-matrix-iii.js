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
    let steps = 1;
    //2 pointers for traversing (ghost pointers)
    [r,c] = [rStart, cStart];

    while (res.length < rows * cols) {
        //move right
        for (let i=0; i<steps; i++) {
            c++;
            if (isValid(r,c)) res.push([r,c]);
        }

        //move down
        for (let i=0; i<steps; i++) {
            r++;
            if (isValid(r,c)) res.push([r,c]);
        }

        steps++;

        //move left
        for (let i=0; i<steps; i++) {
            c--;
            if (isValid(r,c)) res.push([r,c]);
        }

        //move up
        for (let i=0; i<steps; i++) {
            r--;
            if (isValid(r,c)) res.push([r,c]);
        }

        steps++;
    }

    return res;
};
