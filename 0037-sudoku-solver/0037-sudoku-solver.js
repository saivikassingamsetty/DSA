/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    const n = 9;
    let found = false;

    const isValid = (i, j, val) => {
        //rows
        for (let k = 0; k < n; k++) {
            if (board[k][j] == val) return false;
        }

        // cols
        for (let k = 0; k < n; k++) {
            if (board[i][k] == val) return false;
        }

        // box
        let p = 3 * (Math.floor(i / 3));
        let q = 3 * (Math.floor(j / 3));

        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                if (board[p + r][q + c] == val) return false;
            }
        }

        return true;
    }

    const dfs = (i, j) => {
        if (i == 9) {
            found = true;
            return;
        };

        if (found) return;

        if (board[i][j] != '.') {
            if (j + 1 < 9) {
                dfs(i, j + 1);
                if (found) return;
            } else {
                dfs(i + 1, 0);
                if (found) return;
            }
            return;
        };

        //start exploring soldier
        for (let val = 1; val <= 9; val++) {
            if (isValid(i, j, val)) {
                board[i][j] = String(val);

                if (j + 1 < 9) {
                    dfs(i, j + 1);
                    if (found) return;
                } else {
                    dfs(i + 1, 0);
                    if (found) return;
                }

                board[i][j] = '.';
            }
        }
    }

    dfs(0, 0);
};