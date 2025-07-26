/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function (heightMap) {
    const m = heightMap.length, n = heightMap[0].length;
    if (m <= 2 || n <= 2) return 0;

    let pq = new PriorityQueue((a, b) => a[0] - b[0]);
    let vis = Array.from({ length: m }, () => new Array(n).fill(false));

    //push boundaries
    for (let i = 0; i < m; i++) {
        //left
        pq.enqueue([heightMap[i][0], i, 0]);
        vis[i][0] = true;
        //right
        pq.enqueue([heightMap[i][n - 1], i, n - 1]);
        vis[i][n - 1] = true;
    }
    for (let j = 0; j < n; j++) {
        //left
        pq.enqueue([heightMap[0][j], 0, j]);
        vis[0][j] = true;
        //right
        pq.enqueue([heightMap[m - 1][j], m - 1, j]);
        vis[m - 1][j] = true;
    }

    let res = 0;
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    // choose least boundary wall height available at the moment and compare it with its boundaries
    // it can store water if neighbours are lesser (hint, because rest all are already bigger or unapproachable to smaller ones)
    // think like it can't leak anymore because we are traversing in an order
    while (pq.size()) {
        let [h, i, j] = pq.dequeue();

        for (let [di, dj] of dirs) {
            if (i + di < 0 || i + di >= m || j + dj < 0 || j + dj >= n || vis[i + di][j + dj]) continue
            // visit
            vis[i + di][j + dj] = true;

            // track trapped water (wont leak or escape)
            res += Math.max(0, h - heightMap[i + di][j + dj]);

            // Max virtual height (height or height + water to match neighbour height)
            pq.enqueue([Math.max(h, heightMap[i + di][j + dj]), i + di, j + dj]);
        }
    }

    return res;
};