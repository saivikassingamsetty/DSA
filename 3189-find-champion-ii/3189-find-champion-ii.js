/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function (n, edges) {
    let losers = new Set();
    for (let [strong, weak] of edges) losers.add(weak);

    if (losers.size != n - 1) return -1;

    for (let i = 0; i < n; i++) {
        if (!losers.has(i)) return i;
    }
};