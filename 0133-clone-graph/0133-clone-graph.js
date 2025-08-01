/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    let map = new Map();

    const dfs = (n) => {
        if (!n) return;
        if (map.has(n.val)) return map.get(n.val);

        let copy = new _Node(n.val);
        map.set(n.val, copy);

        for (let next of n.neighbors) {
            let nextAdd = dfs(next);
            if (nextAdd) copy.neighbors.push(nextAdd);
        }

        // returns new node address
        return copy;
    }

    return dfs(node);
};