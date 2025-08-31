/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let squares = [];
    for (let i = 1; i * i <= n; i++) {
        squares.push(i * i);
    }

    let queue = new Queue();
    queue.enqueue(n);
    let step = 0;
    let vis = new Set();
    vis.add(n);

    while (queue.size()) {
        step++;
        let currentLen = queue.size();

        for (let i = 0; i < currentLen; i++) {
            let n = queue.dequeue();
            for (let sq of squares) {
                let next = n - sq;
                if (next < 0) break;
                if (next == 0) return step;
                if (!vis.has(next)) {
                    queue.enqueue(next);
                    vis.add(next);
                }
            }
        }
    }

    return step;
};