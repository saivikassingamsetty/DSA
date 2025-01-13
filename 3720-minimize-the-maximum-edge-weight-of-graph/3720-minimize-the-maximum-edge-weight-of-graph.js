/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} threshold
 * @return {number}
 */
var minMaxWeight = function (n, edges, threshold) {
    //rev adjacency list
    let ral = {};
    for (let [u, v, w] of edges) {
        if (!ral[v]) ral[v] = [];
        ral[v].push([u, w])
    }
    let vis;

    //count of nodes which can be visited from that node using Max Weight
    const dfs = (node, maxWeight) => {
        if (vis[node]) return 0;

        vis[node] = 1;
        let res = 1;

        if (!ral[node]) return res;

        for (let [adj, w] of ral[node]) {
            if (w <= maxWeight && !vis[adj]) res += dfs(adj, maxWeight);
        }

        return res;
    }

    let l = 1;
    let r = 1000001;

    while (l < r) {
        let maxW = Math.floor((l + r) / 2);

        vis = new Array(n).fill(0);
        if (dfs(0, maxW) == n) {
            r = maxW;
        } else {
            l = maxW + 1;
        }
    }

    return l == 1000001 ? -1 : l;
};
