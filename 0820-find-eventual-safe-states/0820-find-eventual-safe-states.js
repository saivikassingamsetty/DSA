/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
    let n = graph.length;
    let state = new Array(n).fill(0);

    const isSafeNode = (node) => {
        //if already visited
        if (state[node] != 0) return state[node] == 2;

        //visited
        state[node] = 1;

        for (let adj of graph[node]) {
            //cycle or any child node is unsafe
            if (state[adj] == 1 || !isSafeNode(adj)) {
                return false;
            }
        }

        //safe
        state[node] = 2;
        return true;
    }

    let safe = [];

    for (let i = 0; i < n; i++) {
        if (isSafeNode(i)) {
            safe.push(i);
        }
    }

    return safe.sort((a, b) => a - b);

};