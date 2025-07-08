/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
    let queue = new Queue();
    let n = grid.length;
    const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    let land = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                queue.enqueue([i, j, 0]);
                land++
            }
            else grid[i][j] = -1;
        }
    }

    if (land == 0 || land == n * n) return -1;

    let maxDistance = -1

    while (queue.size()) {
        const [i, j, level] = queue.dequeue();

        for (let [di, dj] of dirs) {
            if (i + di >= 0 && i + di < n && j + dj >= 0 && j + dj < n && grid[i + di][j + dj] == -1) {
                grid[i + di][j + dj] = level + 1;
                maxDistance = Math.max(maxDistance, level + 1);
                queue.enqueue([i + di, j + dj, level + 1]);
            }
        }
    }

    return maxDistance;
};