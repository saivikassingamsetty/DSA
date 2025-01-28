/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    let [m, n] = [grid.length, grid[0].length]
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let vis = new Set();

    const dfs = (i, j) => {
        vis.add(`${i} ${j}`);
        grid[i][j] = 2;

        for (let [di, dj] of directions) {
            if (i + di >= 0 && i + di < m && j + dj >= 0 && j + dj < n) {
                if (!vis.has(`${i + di} ${j + dj}`) && grid[i + di][j + dj] == 1) {
                    dfs(i + di, j + dj);
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!vis.has(`${i} ${j}`) && grid[i][j] == 1 && (i == 0 || i == m - 1 || j == 0 || j == n - 1)) {
                dfs(i, j);
            };
        }
    }

    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) res++;
        }
    }

    return res;
};