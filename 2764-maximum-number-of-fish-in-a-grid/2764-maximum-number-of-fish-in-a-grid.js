/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let vis = new Set();
    let maxSize = 0;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const dfs = (i, j) => {
        vis.add(`${i} ${j}`);
        let size = grid[i][j];

        for (let [di, dj] of directions) {
            if (i + di >= 0 && i + di < m && j + dj >= 0 && j + dj < n) {
                if (grid[i + di][j + dj] && !vis.has(`${i + di} ${j + dj}`)) {
                    size += dfs(i + di, j + dj);
                }
            }
        }

        return size;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] && !vis.has(`${i} ${j}`)) {
                maxSize = Math.max(maxSize, dfs(i, j));
            }
        }
    }

    return maxSize;
};