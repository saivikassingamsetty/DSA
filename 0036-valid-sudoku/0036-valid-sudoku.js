/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const isValid = (i, j) => {
        if (board[i][j] == '.') return true;

        //rows
        for (let k = 0; k < 9; k++) {
            if (k != i && board[k][j] == board[i][j]) return false;
        }

        // cols
        for (let k = 0; k < 9; k++) {
            if (k != j && board[i][k] == board[i][j]) return false;
        }

        return true;
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (!isValid(i, j, board[i][j])) return false;
        }
    }

    // boxes
    for (let r = 1; r < 9; r += 3) {
        for (let c = 1; c < 9; c += 3) {
            let cache = new Set();
            for (let m = -1; m <= 1; m++) {
                for (let n = -1; n <= 1; n++) {
                    if (board[r + m][c + n] != '.' && cache.has(board[r + m][c + n])) return false;
                    cache.add(board[r + m][c + n]);
                }
            }
        }
    }

    return true;
};