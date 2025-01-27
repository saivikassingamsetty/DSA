/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    const vis = new Set();
    const adjList = Array.from({ length: n }, () => []);
    for (let [u, v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u);
    }

    const dfs = (node) => {
        if (node == destination) return true;
        vis.add(node);

        for (let next of adjList[node]) {
            if (!vis.has(next)) {
                if (dfs(next)) return true;
            }
        }

        return false;
    }

    return dfs(source);
};