/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    let set = new Set();
    let n = grid.length;
    let res = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (set.has(grid[i][j])) res = grid[i][j];
            set.add(grid[i][j]);
        }
    }

    for (let i = 1; i <= n * n; i++) {
        if (!set.has(i)) {
            return [res, i];
        }
    }
};