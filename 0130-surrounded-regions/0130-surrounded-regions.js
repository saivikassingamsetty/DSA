/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let [m, n] = [board.length, board[0].length]
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let vis = new Set();

    const dfs = (i, j) => {
        vis.add(`${i} ${j}`);
        board[i][j] = 'S';

        for (let [di, dj] of directions) {
            if (i + di >= 0 && i + di < m && j + dj >= 0 && j + dj < n) {
                if (!vis.has(`${i + di} ${j + dj}`) && board[i + di][j + dj] == 'O') {
                    dfs(i + di, j + dj);
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!vis.has(`${i} ${j}`) && board[i][j] == 'O' && (i == 0 || i == m - 1 || j == 0 || j == n - 1)) {
                dfs(i, j);
            };
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] = board[i][j] == 'S' ? 'O' : 'X'
        }
    }
};