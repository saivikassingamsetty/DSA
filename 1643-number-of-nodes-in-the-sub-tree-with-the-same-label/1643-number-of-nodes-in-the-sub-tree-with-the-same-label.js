/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
    const adjacencyList = {};
    for (let [from, to] of edges) {
        if (!adjacencyList[from]) adjacencyList[from] = [];
        if (!adjacencyList[to]) adjacencyList[to] = [];
        adjacencyList[from].push(to);
        adjacencyList[to].push(from);
    }

    const res = new Array(n).fill(0);

    const dfs = (node, parent) => {
        let freqArray = new Array(26).fill(0);
        let index = labels[node].charCodeAt(0) - 97;
        freqArray[index]++;

        if (!adjacencyList[node]) adjacencyList[node] = [];

        for (let connectedNode of adjacencyList[node]) {
            if (connectedNode != parent) {
                let subTreeFreqMap = dfs(connectedNode, node);
                for (i = 0; i < 26; i++) {
                    freqArray[i] += subTreeFreqMap[i];
                }
            }
        }

        res[node] = freqArray[index];
        return freqArray;
    }

    dfs(0, -1);
    return res;
};