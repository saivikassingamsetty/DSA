/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function (p, q) {
    let visited = new Set();
    let queue = new Queue();
    queue.enqueue(p);
    queue.enqueue(q);

    while (queue.size()) {
        let node = queue.dequeue();
        if (visited.has(node)) return node;
        visited.add(node);

        if (node.parent) queue.enqueue(node.parent);
    }

    return null;
};