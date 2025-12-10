/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let [m, n] = [board.length, board[0].length];

    const dfs = (i, j) => {
        board[i][j] = '.';
        for (let [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            if (i + di >= 0 && i + di < m && j + dj >= 0 && j + dj < n && board[i + di][j + dj] == 'O') {
                dfs(i + di, j + dj);
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0 || i == m - 1 || j == n - 1) {
                if (board[i][j] == 'O') {
                    dfs(i, j);
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == 'O') {
                board[i][j] = 'X'
            } else if (board[i][j] == '.') {
                board[i][j] = 'O'
            }
        }
    }
};