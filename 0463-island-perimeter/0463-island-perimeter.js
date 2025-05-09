/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    // let perimeter = 0;
    // let m = grid.length;
    // let n = grid[0].length;
    // let visited = new Set();

    // const dfs = (i, j) => {
    //     if (j >= n || i >= m || i < 0 || j < 0 || grid[i][j] === 0) {
    //         perimeter++;
    //         return;
    //     }

    //     if (visited.has(`${i} ${j}`)) return;

    //     visited.add(`${i} ${j}`);
    //     dfs(i+1, j);
    //     dfs(i-1, j);
    //     dfs(i, j+1);
    //     dfs(i, j-1);
    // }

    // for (let i = 0; i < m; i++) {
    //     for (let j = 0; j < n; j++) {
    //         if (!visited.has(`${i} ${j}`) && grid[i][j] == 1) {
    //             dfs(i, j);
    //         }
    //     }
    // }

    // return perimeter;

    let m = grid.length;
    let n = grid[0].length;
    let perimeter = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                if (i == 0 || grid[i - 1][j] == 0) perimeter++;
                if (i == m - 1 || grid[i + 1][j] == 0) perimeter++;
                if (j == 0 || grid[i][j - 1] == 0) perimeter++;
                if (j == n - 1 || grid[i][j + 1] == 0) perimeter++;
            }
        }
    }

    return perimeter;
};