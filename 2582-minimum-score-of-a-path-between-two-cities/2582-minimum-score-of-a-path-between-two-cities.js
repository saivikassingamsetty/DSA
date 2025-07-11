/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function (n, roads) {
    let adjList = {};

    for (let [a, b, dist] of roads) {
        if (!adjList[a]) adjList[a] = [];
        if (!adjList[b]) adjList[b] = [];
        adjList[b].push([a, dist]);
        adjList[a].push([b, dist]);
    }

    const seen = new Set();
    let ans = Infinity;
    const stack = [1];

    while (stack.length) {
        const node = stack.pop();
        seen.add(node);

        for (let [next, dist] of adjList[node] || []) {
            ans = Math.min(ans, dist);
            if (!seen.has(next)) {
                seen.add(next);
                stack.push(next);
            }
        }
    }

    return ans;
};