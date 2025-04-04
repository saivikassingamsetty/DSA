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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function (root) {
    const dfs = (node) => {
        if (!node) return [null, 0];

        const [left, leftLen] = dfs(node.left);
        const [right, rightLen] = dfs(node.right);

        if (leftLen > rightLen) return [left, 1 + leftLen];
        if (rightLen > leftLen) return [right, 1 + rightLen];

        return [node, 1 + leftLen];
    }

    return dfs(root)[0];
};