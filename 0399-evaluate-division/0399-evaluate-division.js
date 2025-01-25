/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    let n = equations.length;
    let relation = {};
    let validGroup = new Set();
    let vis = {};

    for (let i = 0; i < n; i++) {
        let [A, B] = equations[i];
        if (!relation[A]) relation[A] = [];
        if (!relation[B]) relation[B] = [];
        relation[A].push([values[i], B]);
        relation[B].push([values[i] ? 1 / values[i] : 0, A]);
        validGroup.add(A);
        validGroup.add(B);
    }

    const findRelation = (a, b) => {
        if (!validGroup.has(a) || !validGroup.has(b)) return -1;

        if (a == b) return 1;

        vis[a] = true;

        for (let [c, d] of relation[a]) {
            if (c && !vis[d]) {
                let x = findRelation(d, b);
                if (x != -1) return c * x;
            }
        }

        return -1;
    }

    return queries.map(([C, D]) => {
        vis = {};
        return findRelation(C, D);
    });
};