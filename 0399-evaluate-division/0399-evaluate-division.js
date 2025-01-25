class DisjointSet {
    constructor() {
        this.parent = new Map();
        this.vals = new Map();
    }

    findParent(node) {
        if (!this.parent.has(node)) {
            this.parent.set(node, node);
            this.vals.set(node, 1);
        }

        if (this.parent.get(node) !== node) {
            const originalParent = this.parent.get(node);
            const parent = this.findParent(originalParent);
            this.parent.set(node, parent);
            this.vals.set(node, this.vals.get(node) * this.vals.get(originalParent));
        }

        return this.parent.get(node);
    }

    union(u, v, value) {
        let parentU = this.findParent(u);
        let parentV = this.findParent(v);

        if (parentU !== parentV) {
            const ratio = this.vals.get(v) * value / this.vals.get(u);
            this.parent.set(parentU, parentV);
            this.vals.set(parentU, ratio);
        }
    }
}

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    let ds = new DisjointSet();
    equations.forEach(([u, v], i) => ds.union(u, v, values[i]));

    return queries.map(([u, v]) => {
        if (!ds.vals.has(u) || !ds.vals.has(v) || ds.findParent(u) !== ds.findParent(v)) {
            return -1;
        }
        return ds.vals.get(u) / ds.vals.get(v);
    });
}