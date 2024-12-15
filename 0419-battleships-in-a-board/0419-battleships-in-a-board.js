/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
    //can be solved as a variant to number of islands

    let res = 0;
    let m = board.length;
    let n = board[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == 'X') {
                res++;
                //if surrounded by X
                if ((i > 0 && board[i-1][j] != '.') || (j > 0 && board[i][j-1] != '.')) {
                    res--;
                }
            }
        }
    }

    return res;
};