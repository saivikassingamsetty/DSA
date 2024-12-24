/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let res = [];
    let n = graph.length;

    const dfs = (node, pathSoFar) => {
        if (node == n-1) {
            res.push(pathSoFar);
            return;
        } 

        for (let neighbour of graph[node]) {
            dfs(neighbour, [...pathSoFar, neighbour]);
        }
    }

    dfs(0, [0]);
    return res;
};