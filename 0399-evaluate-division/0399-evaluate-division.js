class DisjointSet {
    constructor() {
        this.parent = new Map();
        this.size = new Map();
        this.vals = new Map();
    }

    findParent(node) {
        if (!this.parent.has(node)) this.parent.set(node, node);

        if (this.parent.get(node) === node) return node;
        let par = this.findParent(this.parent.get(node));

        this.vals.set(node, this.vals.get(node) * this.vals.get(this.parent.get(node)));
        this.parent.set(node, par);

        return par;
    }

    unionBySize(u, v, value) {
        if (!this.vals.has(u)) this.vals.set(u, 1);
        if (!this.vals.has(v)) this.vals.set(v, 1);

        const ultimateParentU = this.findParent(u);
        const ultimateParentV = this.findParent(v);

        if (ultimateParentU === ultimateParentV) return;

        const ratio = (value * this.vals.get(v)) / this.vals.get(u);

        if (!this.size.has(ultimateParentU)) this.size.set(ultimateParentU, 1);
        if (!this.size.has(ultimateParentV)) this.size.set(ultimateParentV, 1);

        if (this.size.get(ultimateParentU) < this.size.get(ultimateParentV)) {
            this.parent.set(ultimateParentU, ultimateParentV);
            this.size.set(
                ultimateParentV,
                this.size.get(ultimateParentU) + this.size.get(ultimateParentV)
            );
            this.vals.set(ultimateParentU, ratio);
        } else {
            this.parent.set(ultimateParentV, ultimateParentU);
            this.size.set(
                ultimateParentU,
                this.size.get(ultimateParentU) + this.size.get(ultimateParentV)
            );
            this.vals.set(ultimateParentV, 1 / ratio);
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
    for (let i = 0; i < equations.length; i++) {
        ds.unionBySize(equations[i][0], equations[i][1], values[i]);
    }

    let res = [];
    for (let [u, v] of queries) {
        if (!ds.vals.has(u) || !ds.vals.has(v) || ds.findParent(u) != ds.findParent(v)) {
            res.push(-1)
        } else {
            res.push(ds.vals.get(u) / ds.vals.get(v));
        }
    }

    return res;
};