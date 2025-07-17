/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let res = null;

    const findLCA = (node) => {
        if (!node) return 0;

        // left
        let left = findLCA(node.left);
        if (left == 2) return 2;

        // right
        let right = findLCA(node.right);
        if (right == 2) return 2;

        // node itself
        let count = ((node.val == q.val || node.val == p.val) ? 1 : 0) + left + right;
        if (count == 2 && res === null) res = node;

        return count;
    }

    if (p && q) findLCA(root);

    return res;
};