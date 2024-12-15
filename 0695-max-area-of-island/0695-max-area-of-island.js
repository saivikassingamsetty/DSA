/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res = 0;
    let visited = new Set();
    let m = grid.length;
    let n = grid[0].length;

    const dfs = (i,j) => {
        if (j >= n || i >= m || i < 0 || j < 0 || grid[i][j] === 0) return;

        if (visited.has(`${i} ${j}`)) return;

        visited.add(`${i} ${j}`);

        dfs(i+1, j)
        dfs(i-1, j)
        dfs(i, j+1)
        dfs(i, j-1);
    }

    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited.has(`${i} ${j}`) && grid[i][j] == 1) {
                let prev = visited.size;
                dfs(i, j);
                res = Math.max(res, visited.size - prev);
            }
        }
    }

    return res;
};