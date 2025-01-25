/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    let res = [];
    let parent = new Map();

    function find(node) {
        if (!parent.get(node)) {
            parent.set(node, node);
        }

        if (parent.get(node) !== node) {
            parent.set(node, find(parent.get(node)));
        }

        return parent.get(node);
    }

    function union(u, v) {
        const rootU = find(u);
        const rootV = find(v);

        if (rootU !== rootV) {
            parent.set(rootU, rootV);
        } else {
            res = [u, v];
        }
    }

    edges.forEach(([u, v]) => union(u, v));
    return res;
};