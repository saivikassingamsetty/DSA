/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const [m, n] = [grid.length, grid[0].length];
    const memo = new Map();

    const dfs = (i, j) => {
        if (i == m - 1 && j == n - 1) return grid[m - 1][n - 1];
        if (i >= m | j >= n) return Infinity;

        if (!memo.has(`${i},${j}`)) {
            memo.set(`${i},${j}`, grid[i][j] + Math.min(dfs(i + 1, j), dfs(i, j + 1)))
        }

        return memo.get(`${i},${j}`);
    }

    return dfs(0, 0);
};