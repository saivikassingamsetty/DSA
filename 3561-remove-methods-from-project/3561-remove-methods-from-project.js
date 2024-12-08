/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function (n, k, invocations) {
    //create an adjacency list
    const adjacencyList = {};
    invocations.forEach(([from, to]) => {
        if (from in adjacencyList) adjacencyList[from].push(to);
        else adjacencyList[from] = [to];
    });

    //traverse the graph
    const effected = new Set();
    let res = [];

    const dfs = (node, mode) => {
        if (mode == 'pollute') {
            if (effected.has(node)) return;
            effected.add(node);
        } else {
            if (effected.has(node)) {
                res.push(...effected);
                effected.clear();
                return;
            } else {
                res.push(node);
                return;
            }
        }

        if (node in adjacencyList) {
            for (const child of adjacencyList[node]) dfs(child, mode);
        }
    }

    dfs(k, 'pollute');

    //now if un effected nodes call any of effected, it would be un effected
    for (let node=0; node<n; node++) {
        //only traverse from un effected
        if (!effected.has(+node)) {
            res.push(+node);
            if (node in adjacencyList) {
                for (const child of adjacencyList[node]) {
                    dfs(child, 'clean');
                    if (!effected.size) break;
                }
            }
        }
    }

    return [...(new Set(res))];
};