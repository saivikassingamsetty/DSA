/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
    const adjacencyList = {};
    for (let [from, to] of edges) {
        if (!adjacencyList[from]) adjacencyList[from] = [];
        if (!adjacencyList[to]) adjacencyList[to] = [];
        adjacencyList[from].push(to);
        adjacencyList[to].push(from);
    }

    const dfs = (node, parent) => {
        let totalTimeToVisitAllApples = 0;
        let totalTimeToVisitAllApplesForSubTree = 0;
        let doesSubTreeHasApples = false;
        
        if (!adjacencyList[node]) adjacencyList[node] = [];

        for (let connectedNode of adjacencyList[node]) {
            if (connectedNode != parent) {
                totalTimeToVisitAllApplesForSubTree = dfs(connectedNode, node);
                if (totalTimeToVisitAllApplesForSubTree) {
                    doesSubTreeHasApples = true;
                    totalTimeToVisitAllApples += totalTimeToVisitAllApplesForSubTree;
                }
            }
        }

        //don't consider for root node!
        if ((!node == 0) && (doesSubTreeHasApples || hasApple[node])) {
            totalTimeToVisitAllApples += 2;
        }

        return totalTimeToVisitAllApples;
    }

    return dfs(0, -1);
};