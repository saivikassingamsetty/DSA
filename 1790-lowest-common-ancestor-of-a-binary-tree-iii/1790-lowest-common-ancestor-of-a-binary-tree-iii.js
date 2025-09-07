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
    let [p1, p2] = [p, q];

    while (p1 != p2) {
        p1 = p1.parent ? p1.parent: q;
        p2 = p2.parent ? p2.parent: p;
    }

    return p1;
};