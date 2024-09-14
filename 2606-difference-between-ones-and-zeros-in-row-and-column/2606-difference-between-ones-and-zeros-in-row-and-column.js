/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    let rowCount = grid.map(i => i.reduce((acc, item) => acc+item, 0));
    let colCount = [];
    for (let j=0; j<grid[0].length; j++) {
        let col = 0;
        for (let i=0; i<grid.length; i++) {
            col += grid[i][j];
        }
        colCount.push(col);
    }

    let res = new Array(grid.length).fill().map(() => new Array(grid[0].length).fill(0));

    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            res[i][j] = 2*(rowCount[i] + colCount[j]) - (grid.length + grid[0].length);
        }
    }

    return res;
};