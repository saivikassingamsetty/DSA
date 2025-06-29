/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
    let [m, n] = [mat.length, mat[0].length];

    let l = 0;
    let r = n - 1;
    while (l <= r) {
        let midCol = Math.floor((l + r) / 2);

        // find max row
        let maxRow = 0;
        for (let row = 0; row < m; row++) {
            if (mat[row][midCol] > mat[maxRow][midCol]) maxRow = row;
        }

        // check boundaries
        let hasBiggerRight = midCol < n - 1 && mat[maxRow][midCol + 1] > mat[maxRow][midCol];
        let hasBiggerLeft = midCol > 0 && mat[maxRow][midCol - 1] > mat[maxRow][midCol];

        if (!hasBiggerLeft && !hasBiggerRight) return [maxRow, midCol];

        if (hasBiggerLeft) r = midCol - 1
        else l = midCol + 1
    }

    return [-1, -1]
};