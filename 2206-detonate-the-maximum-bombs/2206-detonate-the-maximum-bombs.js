/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function (bombs) {
    const n = bombs.length;
    const edges = {};
    for (let i = 0; i < n; i++) {
        edges[i] = [];
        for (let j = 0; j < n; j++) {
            if (i != j) {
                if ((bombs[j][0] - bombs[i][0]) ** 2 + (bombs[j][1] - bombs[i][1]) ** 2 <= bombs[i][2] ** 2) {
                    edges[i].push(j);
                }
            }
        }
    }

    let vis = new Set();

    const dfs = (node) => {
        vis.add(node);
        let size = 1;

        for (let next of edges[node]) {
            if (!vis.has(next)) size += dfs(next);
        }

        return size;
    }

    let maxSize = 1;

    for (let i = 0; i < n; i++) {
        vis = new Set();
        maxSize = Math.max(maxSize, dfs(i));
    }

    return maxSize;
};