/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
    let isSafe = new Array(graph.length).fill(false);
    let vis = new Array(graph.length).fill(false);

    const isSafeNode = (node) => {
        vis[node] = true;
        safe = true;

        for (let adj of graph[node]) {
            if (vis[adj] && isSafe[adj]) {
                continue;
            } else if (vis[adj] && !isSafe[adj]) {
                safe = false;
            } else {
                safe &= isSafeNode(adj);
            }

            if (!safe) break;
        }

        isSafe[node] = safe;
        return safe;
    }

    const ans = [];

    for (let i = 0; i < graph.length; i++) {
        if (!vis[i]) isSafeNode(i);
        if (isSafe[i]) ans.push(i);
    }

    return ans;
};