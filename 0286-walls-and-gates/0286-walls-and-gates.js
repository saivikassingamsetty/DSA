/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
    let [m, n] = [rooms.length, rooms[0].length];

    // populate all gates
    let queue = new Queue();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rooms[i][j] == 0) queue.enqueue([i, j, 0]);
        }
    }

    while (queue.size()) {
        let [i, j, steps] = queue.dequeue();
        for (let [di, dj] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
            if (i + di >= 0 && j + dj >= 0 && i + di < m && j + dj < n) {
                if (rooms[i + di][j + dj] == 2147483647) {
                    rooms[i + di][j + dj] = steps + 1;
                    queue.enqueue([i + di, j + dj, steps + 1]);
                }
            }
        }
    }

};

