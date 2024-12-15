/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
    //number of islands
    let res = 0;
    let visited = new Set();
    let queue = [];
    let m = board.length;
    let n = board[0].length;

    const bfs = (x, y) => {
        queue = [];
        queue.push([x, y]);

        while (queue.length) {
            let [i, j] = queue.shift();
            visited.add(`${i} ${j}`);

            for (let [di, dj] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
                if (i + di >= 0 && i + di < m && j + dj >= 0 && j + dj < n) {
                    if (!visited.has(`${i + di} ${j + dj}`) && board[i + di][j + dj] == 'X') {
                        queue.push([i + di, j + dj]);
                        visited.add(`${i + di} ${j + dj}`);
                    }
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited.has(`${i} ${j}`) && board[i][j] == 'X') {
                bfs(i, j);
                res++;
            }
        }
    }

    return res;
};