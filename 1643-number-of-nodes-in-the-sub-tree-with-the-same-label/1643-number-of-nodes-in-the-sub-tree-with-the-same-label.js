/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
    const adjacencyList = Array(n).fill().map(() => []);
    for (let [from, to] of edges) {
        adjacencyList[from].push(to);
        adjacencyList[to].push(from);
    }

    const res = new Array(n).fill(0);
    const count = new Array(26).fill(0);

    const dfs = (node, parent) => {
        let prevCount = count[labels[node].charCodeAt(0) - 97];

        for (let child of adjacencyList[node]) {
            if (child != parent) {
                dfs(child, node);
            }
        }
        
        count[labels[node].charCodeAt(0) - 97]++;
        res[node] = count[labels[node].charCodeAt(0) - 97] - prevCount;
    }

    dfs(0, -1);
    return res;
};