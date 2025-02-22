/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let res = Array.from({ length: n }, () => new Array(n).fill('.'));
    let finalRes = [];

    const isValid = (row, col) => {
        //row
        for (let j = 0; j < n; j++) {
            if (res[row][j] == 'Q') return false;
        }

        //col
        for (let i = 0; i < n; i++) {
            if (res[i][col] == 'Q') return false;
        }

        //diagnol-1
        for (let i = -n; i < n; i++) {
            if (row + i >= 0 && row + i < n && col + i >= 0 && col + i < n && res[row + i][col + i] == 'Q') return false;
        }

        //diagnol-2
        for (let i = -n; i < n; i++) {
            if (row + i >= 0 && row + i < n && col - i >= 0 && col - i < n && res[row + i][col - i] == 'Q') return false;
        }

        return true;
    }

    const solve = (row) => {
        if (row == n) {
            finalRes.push(JSON.parse(JSON.stringify(res)));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                res[row][col] = 'Q';
                solve(row + 1);
                res[row][col] = '.';
            }
        }
    }

    solve(0);
    return finalRes.map(res => res.map(row => row.join('')));
};