/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    function findDepth(node) {
        if (!node) return 0;

        let l = node.left ? findDepth(node.left): 0;
        let r = node.right ? findDepth(node.right) : 0;

        return 1 + Math.max(l, r);
    }

    function findLeftDeepNode(node, d) {
        if (d == depth) {
            if (res === undefined) res = node.val;
            return node.val;
        }

        if (node.left) findLeftDeepNode(node.left, d+1);
        if (node.right) findLeftDeepNode(node.right, d+1);
    }

    let res = undefined;
    const depth = findDepth(root);
    findLeftDeepNode(root, 1);

    return res;
};