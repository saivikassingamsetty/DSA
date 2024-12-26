/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function (boxGrid) {
    let res = [];

    for (let i = 0; i < boxGrid.length; i++) {
        let count = 0;
        let j = 0;
        let k = 0;
        let row = '';
        while (k < boxGrid[0].length) {
            if (boxGrid[i][k] == '*') {
                row += '.'.repeat(k - j - count) + '#'.repeat(count) + '*';
                count = 0;
                j = k + 1;
            } else if (boxGrid[i][k] == '#') {
                count++;
            }
            k++;
        }

        row += '.'.repeat(boxGrid[0].length - row.length - count) + '#'.repeat(count);
        res.push(row.split(''));
    }

    function rotate90(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let grid = []
        for (let col = 0; col < cols; col++) {
            grid[col] = []
        }
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                grid[col][rows - 1 - row] = matrix[row][col]
            }
        }
        return grid
    }

    return rotate90(res);
};