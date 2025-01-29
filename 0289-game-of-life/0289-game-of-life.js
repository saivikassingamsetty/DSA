/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    //if dead 1 -> -1
    //if came to live -> 0 -> 2
    // if sustain 1 -> 1

    let [m, n] = [board.length, board[0].length]

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            let liveCount = 0;
            for (let k = i - 1; k <= i + 1; k++) {
                for (let l = j - 1; l <= j + 1; l++) {
                    if (k >= 0 && k < m && l >= 0 && l < n) {
                        if (board[k][l] == 1 || board[k][l] == -1) liveCount++;
                    };
                }
            }
            liveCount -= (board[i][j] == 1 || board[i][j] == -1) ? 1 : 0;

            if ((board[i][j] == 1 || board[i][j] == -1) && (liveCount < 2 || liveCount > 3)) board[i][j] = -1
            else if ((!board[i][j] || board[i][j] == 2) && liveCount == 3) board[i][j] = 2;
        }
    }

    //replace the temporary dead and alive to permanent
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == -1) board[i][j] = 0
            else if (board[i][j] == 2) board[i][j] = 1;
        }
    }
};