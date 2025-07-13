/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let m = board.length;
    let n = board[0].length;

    const dfs = (i, j, k) => {
        if (k == word.length) return true;
        if (i >= m || i < 0 || j < 0 || j >= n) return false;
        if (board[i][j] == '#') return false;
        if (board[i][j] != word[k]) return false;

        board[i][j] = '#';
        for (let [di, dj] of [[-1, 0], [1, 0], [0, 1], [0, -1]]) {
            if (dfs(i + di, j + dj, k + 1)) return true;
        }
        board[i][j] = word[k];

        return false;
    }

    let start = word[0];
    let end = word[word.length - 1];
    const freq = { start: 0, end: 0 };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == start) freq[start] + 1;
            else if (board[i][j] == end) freq[end] + 1;
        }
    }

    if (freq[start] > freq[end]) return exist(board, word.reverse());

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
};