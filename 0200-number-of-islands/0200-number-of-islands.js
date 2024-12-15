/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let res = 0;
    let visited = new Set();
    let queue = [];
    let m = grid.length;
    let n = grid[0].length;

    const bfs = (x, y) => {
        queue = [];
        queue.push([x, y]);

        while (queue.length) {
            let [i, j] = queue.shift();
            visited.add(`${i} ${j}`);

            for (let [di, dj] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
                if (i + di >= 0 && i + di < m && j + dj >= 0 && j + dj < n) {
                    if (!visited.has(`${i + di} ${j + dj}`) && grid[i + di][j + dj] == '1') {
                        queue.push([i + di, j + dj]);
                        visited.add(`${i + di} ${j + dj}`);
                    }
                }
            }
        }
    }

    const dfs = (i, j) => {
        if (j >= n || i >= m || i < 0 || j < 0 || grid[i][j] === '0') return;

        if (visited.has(`${i} ${j}`)) return;

        visited.add(`${i} ${j}`);
        dfs(i+1, j);
        dfs(i-1, j);
        dfs(i, j+1);
        dfs(i, j-1);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited.has(`${i} ${j}`) && grid[i][j] == '1') {
                // bfs(i, j);
                dfs(i, j);
                res++;
            }
        }
    }

    return res;
};