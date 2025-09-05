/**
 * @param {number} n
 */
var TicTacToe = function (n) {
    this.n = n;
    this.xCount = Array.from({ length: n }, () => [0, 0]);
    this.yCount = Array.from({ length: n }, () => [0, 0]);
    this.d1Count = [0, 0];
    this.d2Count = [0, 0];
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function (row, col, player) {
    this.xCount[row][player - 1]++;
    this.yCount[col][player - 1]++;
    if (row == col) this.d1Count[player - 1]++;
    if (row + col + 1 == this.n) this.d2Count[player - 1]++;

    if ([this.xCount[row][player - 1], this.yCount[col][player - 1], this.d1Count[player - 1], this.d2Count[player - 1]].includes(this.n)) return player;

    return 0;
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */