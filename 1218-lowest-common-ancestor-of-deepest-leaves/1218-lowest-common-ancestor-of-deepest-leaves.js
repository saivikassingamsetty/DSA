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
var lcaDeepestLeaves = function (root) {
    const findMaxLength = (node) => {
        if (!node) return 0;

        return 1 + Math.max(findMaxLength(node.left), findMaxLength(node.right));
    }

    const maxLen = findMaxLength(root);

    const dfs = (node, depth) => {
        if (!node) return [null, depth];

        const [left, leftLen] = dfs(node.left, depth + 1);
        const [right, rightLen] = dfs(node.right, depth + 1);

        if (leftLen == maxLen && rightLen == maxLen) return [node, maxLen];
        if (leftLen == maxLen) return [left, maxLen];
        if (rightLen == maxLen) return [right, maxLen];

        return [node, 0];
    }

    return dfs(root, 0)[0];
};