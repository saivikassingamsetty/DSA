/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let board = Array.from({ length: n }, () => new Array(n).fill('.'));
    let res = 0;
    const cols = new Array(n).fill(0);
    const upperDiagonal = new Array(2 * n - 1).fill(0);
    const lowerDiagonal = new Array(2 * n - 1).fill(0);

    const solve = (row) => {
        if (row == n) {
            res++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (!cols[col] && !upperDiagonal[row + col] && !lowerDiagonal[n - 1 + col - row]) {
                board[row][col] = 'Q';
                cols[col] = 1;
                upperDiagonal[row + col] = 1;
                lowerDiagonal[n - 1 + col - row] = 1;

                solve(row + 1);

                board[row][col] = '.';
                cols[col] = 0;
                upperDiagonal[row + col] = 0;
                lowerDiagonal[n - 1 + col - row] = 0;
            }
        }
    }

    solve(0);
    return res;
};