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
 * @return {boolean}
 */
var isBalanced = function (root) {
    let isWon = true;

    const dfs = (node) => {
        if (!node) return 0;

        const l = dfs(node.left);
        const r = dfs(node.right);

        if (Math.abs(l - r) > 1) {
            isWon = false;
            return false;
        };

        return 1 + Math.max(l, r);
    }

    dfs(root);
    return isWon;
};