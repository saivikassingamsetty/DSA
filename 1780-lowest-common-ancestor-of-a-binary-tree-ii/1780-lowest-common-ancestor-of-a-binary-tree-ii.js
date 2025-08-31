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

        let left = findLCA(node.left);
        if (left == 2) return 2;

        let right = findLCA(node.right);
        if (right == 2) return 2;


        let val = left + right;
        if (p && node.val == p.val) val++;
        if (q && node.val == q.val) val++;
        if (val == 2 && !res) res = node;

        return val;
    }

    findLCA(root);

    return res;
};