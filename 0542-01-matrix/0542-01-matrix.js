/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let queue = new Queue();
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] == 1) {
                mat[i][j] = Infinity;
            } else if (mat[i][j] == 0) {
                queue.enqueue([i, j, 0]);
            }
        }
    }

    while (queue.size()) {
        const [i, j, level] = queue.dequeue();

        for ([di, dj] of dirs) {
            if (i + di >= 0 && i + di < mat.length && j + dj >= 0 && j + dj < mat[0].length) {
                if (mat[i + di][j + dj] != 0) {
                    if (mat[i + di][j + dj] > level + 1) {
                        mat[i + di][j + dj] = level + 1;
                        queue.enqueue([i + di, j + dj, level + 1]);
                    }
                }
            }
        }
    }

    return mat;
};