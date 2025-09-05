/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
    this.parent = new Array(n).fill(-1);
    this.rank = new Array(n).fill(0);

    const find = (node) => {
        if (this.parent[node] == node) return node;
        if (this.parent[node] === -1) return this.parent[node] = node;
        return find(this.parent[node]);
    }

    const union = (u, v) => {
        let pU = find(u);
        let pV = find(v);

        if (pU == pV) return;
        if (this.rank[pU] > this.rank[pV]) {
            this.parent[pV] = pU;
            this.rank[pU]++;
        } else {
            this.parent[pU] = pV;
            this.rank[pV]++;
        }
    }

    for (let [u, v] of edges) union(u, v);

    let roots = new Set();
    for (let i = 0; i < n; i++) roots.add(find(i));

    return roots.size;
};