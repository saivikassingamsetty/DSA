/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
    let res = 0;
    let blocks = 0;
    let source = [0, 0];
    let m = grid.length;
    let n = grid[0].length;
    let directions = [[0, -1], [0, 1], [1, 0], [-1, 0]];

    const dfs = (i, j, visited) => {
        if (grid[i][j] == 2 && visited.size == m * n - blocks) {
            res++;
            return;
        };


        for (let [dx, dy] of directions) {
            if (i + dx >= 0 && i + dx < m && j + dy >= 0 && j + dy < n) {
                console.log(i + dx, j + dy, i, j)
                if (grid[i + dx][j + dy] != -1 && !visited.has(`${i + dx} ${j + dy}`)) {
                    visited.add(`${i + dx} ${j + dy}`);
                    dfs(i + dx, j + dy, visited);
                    visited.delete(`${i + dx} ${j + dy}`);
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                source = [i, j];
            } else if (grid[i][j] == -1) {
                blocks++;
            }
        }
    }

    dfs(source[0], source[1], new Set([`${source[0]} ${source[1]}`]));
    return res;
};