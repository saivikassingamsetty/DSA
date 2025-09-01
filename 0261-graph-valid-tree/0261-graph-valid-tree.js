/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    const adjList = {};
    for (let [u,v] of edges) {
        if (!adjList[u]) adjList[u] = [];
        if (!adjList[v]) adjList[v] = [];
        adjList[u].push(v);
        adjList[v].push(u);
    }

    const vis = new Set();

    const containsCycle = (node, parent) => {
        for (let next of adjList[node] ?? []) {
            if (next == parent) continue;
            if (vis.has(next)) return true;
            vis.add(next);
            if (containsCycle(next, node)) return true;
        }

        return false;
    }

    vis.add(0);
    if (containsCycle(0, null)) return false

    return vis.size == n;
};