/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    let rowMax = grid.map(row => Math.max(...row));
    let colMax = [];
    for (let c = 0; c < grid.length; c++) {
        let cMax = 0;
        for (let r = 0; r < grid.length; r++) {
            cMax = Math.max(cMax, grid[r][c]);
        }
        colMax.push(cMax);
    }

    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            let diff = Math.min(rowMax[i], colMax[j]) - grid[i][j];
            res += diff > 0 ? diff: 0;
        }
    }

    return res;
};