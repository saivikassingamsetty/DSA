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
var goodNodes = function (root, maxSoFar = -Infinity) {
    if (!root) return 0;
    return (root.val >= maxSoFar ? 1: 0) + goodNodes(root.left, Math.max(root.val, maxSoFar)) +  goodNodes(root.right, Math.max(root.val, maxSoFar));
};