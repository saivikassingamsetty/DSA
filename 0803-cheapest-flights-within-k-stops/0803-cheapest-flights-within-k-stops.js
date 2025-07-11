/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    let minPrice = Infinity;

    let adjList = {};
    for (let [u, v, dist] of flights) {
        if (!adjList[u]) adjList[u] = [];
        adjList[u].push([v, dist]);
    };

    const priceChart = Array.from({ length: n }, () => Array(k + 2).fill(Infinity));
    priceChart[src][0] = 0;

    let pq = new PriorityQueue((a, b) => a[2] - b[2]);
    pq.enqueue([src, 0, 0]);

    while (pq.size()) {
        let [stop, stopsSoFar, priceSoFar] = pq.dequeue();

        if (stop == dst) {
            minPrice = Math.min(minPrice, priceSoFar);
            continue;
        }

        if (stopsSoFar > k) continue;

        for (let [nextStop, price] of adjList[stop] || []) {
            if (priceSoFar + price < priceChart[nextStop][stopsSoFar + 1]) {
                priceChart[nextStop][stopsSoFar + 1] = priceSoFar + price;
                pq.enqueue([nextStop, stopsSoFar + 1, priceSoFar + price]);
            }
        }
    }

    return minPrice == Infinity ? -1 : minPrice;
};