/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
    let [m, n] = [isWater.length, isWater[0].length];
    let res = Array.from({ length: m }, (x) => new Array(n).fill(Infinity));
    let queue = Queue.fromArray([]);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] == 1) {
                res[i][j] = 0;
                queue.enqueue([i, j]);
            }
        }
    }
    let directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];

    while (queue.size()) {
        let [x, y] = queue.dequeue();

        for (let [dx, dy] of directions) {
            if (x + dx >= 0 && x + dx < m && y + dy >= 0 && y + dy < n) {
                if (res[x + dx][y + dy] > res[x][y] + 1) {
                    res[x + dx][y + dy] = res[x][y] + 1;
                    queue.enqueue([x + dx, y + dy]);
                }
            }
        }
    }

    return res;
};