/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    let [m, n] = [matrix.length, matrix[0].length];
    let res = Array.from({ length: m }, () => new Array(n).fill(0));
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let max = 1;

    const dfs = (i, j) => {
        if (res[i][j]) return res[i][j];

        let maxLength = 0;

        for (let [di, dj] of dirs) {
            let newI = i + di;
            let newJ = j + dj;

            if (newI < 0 || newI >= m || newJ < 0 || newJ >= n) continue;

            if (matrix[i][j] < matrix[newI][newJ]) {
                maxLength = Math.max(maxLength, dfs(newI, newJ));
            }
        }

        res[i][j] = 1 + maxLength;
        max = Math.max(max, res[i][j]);
        return res[i][j];
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j);
        }
    }

    return max;
};