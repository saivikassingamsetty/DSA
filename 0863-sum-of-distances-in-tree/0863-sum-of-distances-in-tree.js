/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (n, edges) {
    const tree = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        tree[u].push(v);
        tree[v].push(u);
    }

    const res = new Array(n).fill(0);
    const count = new Array(n).fill(1);

    //postorder
    const findSum = (node, parent) => {
        for (let next of tree[node] || []) {
            if (next == parent) continue;
            findSum(next, node);

            count[node] += count[next];
            res[node] += count[next] + res[next];
        }
    }

    // preorder
    const reroot = (node, parent) => {
        for (let next of tree[node] || []) {
            if (next != parent) {
                res[next] = res[node] - count[next] + (n - count[next])
                reroot(next, node);
            }
        }
    }

    findSum(0, -1);
    reroot(0, -1);

    return res;
};