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
var maxDepth = function (root) {
    const findDepth = (node) => {
        if (!node) return 0;

        let left = (node.left) ? findDepth(node.left) : 0;
        let right = (node.right) ? findDepth(node.right) : 0;

        return 1 + Math.max(left, right);
    }

    return findDepth(root);
};