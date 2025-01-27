/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    const parents = {};

    const find = (node) => {
        if (parents[node] === undefined) {
            parents[node] = node;
        }

        if (parents[node] !== node) {
            parents[node] = find(parents[node]);
        }

        return parents[node];
    }

    const union = (u, v) => {
        const rootU = find(u);
        const rootV = find(v);

        if (rootU !== rootV) parents[rootU] = rootV;
    }

    edges.forEach(([u, v]) => union(u, v));
    return find(source) == find(destination);
};