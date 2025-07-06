/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let vis = new Set();
    let res = 0;

    const visit = (node) => {
        vis.add(node);
        for (let next = 0; next < isConnected[node].length; next++) {
            if (next != node && isConnected[node][next] && !vis.has(next)) visit(next);
        }
    }

    for (let i = 0; i < isConnected.length; i++) {
        if (!vis.has(i)) {
            visit(i);
            res++;
        }

        if (vis.size == isConnected.length) break;
    }

    return res;
};