/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res = 0;
    let m = grid.length;
    let n = grid[0].length;

    const dfs = (i,j) => {
        if (j >= n || i >= m || i < 0 || j < 0 || grid[i][j] === 0) return 0;

        //instead of visited
        grid[i][j] = 0;

        return 1 + dfs(i+1, j) + dfs(i-1, j) + dfs(i, j+1) + dfs(i, j-1);
    }

    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                res = Math.max(res, dfs(i, j));
            }
        }
    }

    return res;
};