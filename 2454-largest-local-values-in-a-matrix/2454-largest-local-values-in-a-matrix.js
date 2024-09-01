/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let res = [];

    for (let i=1; i<grid.length-1; i++) {
        let row = [];

        for (let j=1; j<grid.length-1; j++) {
            let max = 0;
            for (let di of [-1, 0, 1]) {
                for (let dj of [-1, 0, 1]) {
                    max = Math.max(max, grid[i+di][j+dj]);
                }
            }

            row.push(max);
        }

        res.push(row);
    }

    return res;
};