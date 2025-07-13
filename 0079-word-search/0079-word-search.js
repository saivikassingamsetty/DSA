/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const vis = new Set();
    let m = board.length;
    let n = board[0].length;

    const dfs = (i, j, k) => {
        if (k == word.length) return true;
        if (i >= m || i < 0 || j < 0 || j >= n) return false;
        if (vis.has(`${i},${j}`)) return false;
        if (board[i][j] != word[k]) return false;

        vis.add(`${i},${j}`);
        for (let [di, dj] of [[-1, 0], [1, 0], [0, 1], [0, -1]]) {
            if (dfs(i + di, j + dj, k + 1)) return true;
        }
        vis.delete(`${i},${j}`);

        return false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
};